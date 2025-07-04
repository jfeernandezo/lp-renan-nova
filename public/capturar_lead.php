<?php
// Define que a resposta será em formato JSON e permite requisições de qualquer origem (CORS)
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Em produção, restrinja para o seu domínio: header("Access-Control-Allow-Origin: https://seusite.com");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// O PHP pode enviar uma requisição OPTIONS antes do POST. Isso a manipula corretamente.
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Verifica se o método da requisição é POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405); // Método não permitido
    echo json_encode(["status" => "error", "message" => "Método não permitido. Utilize POST."]);
    exit;
}

// Pega o corpo da requisição, que está em formato JSON
$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true);

// 1. Validação dos Dados
$errors = [];
if (empty($data['nome'])) {
    $errors[] = "O campo 'nome' é obrigatório.";
}
if (empty($data['email'])) {
    $errors[] = "O campo 'e-mail' é obrigatório.";
} elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = "O formato do e-mail é inválido.";
}
if (empty($data['whatsapp'])) {
    $errors[] = "O campo 'WhatsApp' é obrigatório.";
}

if (!empty($errors)) {
    http_response_code(400); // Bad Request
    echo json_encode(["status" => "error", "message" => "Dados inválidos.", "errors" => $errors]);
    exit;
}

// 2. Sanitização dos Dados (Prevenção contra XSS)
$nome = htmlspecialchars(strip_tags(trim($data['nome'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$whatsapp = htmlspecialchars(strip_tags(trim($data['whatsapp'])));
$data_captura = date("Y-m-d H:i:s"); // Adiciona data e hora da captura

// 3. Salvando os Dados
$filePath = 'leads.csv';
$fileHeader = "Nome,Email,WhatsApp,DataCaptura\n";

// Cria o arquivo e o cabeçalho se ele não existir
if (!file_exists($filePath)) {
    file_put_contents($filePath, $fileHeader);
}

// Formata a linha para o CSV (entre aspas para lidar com vírgulas nos dados)
$csvData = "\"{$nome}\",\"{$email}\",\"{$whatsapp}\",\"{$data_captura}\"\n";

// Adiciona a nova linha de dados ao final do arquivo
if (file_put_contents($filePath, $csvData, FILE_APPEND | LOCK_EX)) {
    // 4. Resposta de Sucesso
    http_response_code(200); // OK
    echo json_encode(["status" => "success", "message" => "Dados recebidos com sucesso!"]);
} else {
    // Resposta de Erro no Servidor
    http_response_code(500); // Internal Server Error
    echo json_encode(["status" => "error", "message" => "Falha ao salvar os dados no servidor."]);
}

?>