// Google Apps Script — приймає результати з сайту й записує в таблицю.
//
// ЯК ПІДКЛЮЧИТИ:
// 1. Створити нову Google Таблицю (sheets.new).
// 2. Extensions → Apps Script.
// 3. Видалити весь код-заготовку, вставити замість нього вміст цього файлу.
// 4. Зберегти (значок дискети).
// 5. Deploy → New deployment → значок шестірні → Web app.
//    - Execute as: Me
//    - Who has access: Anyone
// 6. Deploy → скопіювати Web app URL.
// 7. Вставити цей URL у index.html замість SHEET_URL (рядок з 'ВСТАВ_СВІЙ_ID').
//
// Кожен новий деплой (після зміни коду скрипта) вимагає Deploy → Manage deployments →
// редагувати існуючий деплой → New version, інакше сайт і далі стукатиме у стару версію коду.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Час', 'Завдання', 'Відповідь', 'Правильно']);
  }

  var p = e.parameter;
  sheet.appendRow([
    new Date(),
    p.task || '',
    p.answer || '',
    p.correct || '',
  ]);

  return ContentService.createTextOutput('OK');
}
