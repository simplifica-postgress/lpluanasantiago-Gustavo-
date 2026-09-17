// Google Apps Script — recebe o formulário da landing page e grava na planilha.
// Planilha: 1rQv6RhpmWI7PFRTr24-9Gy3mUedsKhfnhlSZeRZr_1w

const SHEET_ID = '1rQv6RhpmWI7PFRTr24-9Gy3mUedsKhfnhlSZeRZr_1w';
const SHEET_NAME = 'Leads';

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['Data', 'Nome', 'WhatsApp', 'Tipo de projeto', 'Mensagem', 'Origem']);
  }
  sh.appendRow([
    new Date(),
    data.nome || '',
    data.whatsapp || '',
    data.tipo || '',
    data.mensagem || '',
    data.origem || '',
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
