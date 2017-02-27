Запуск тестов:

1. Bash - устанавливаем менеджер пакетов Chocolatey
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

2. Устанавливаем Node.js
choco install nodejs

3. Устанавливаем оболочку babun
choco install babun

4. Запускаем Babun и переходим в папку с тестами
cd my-tests

5. Собираем зависимости
npm i
npm run setup

##################
Запуск одного теста
##################
npm run one-test --testcase=01 (testcase=01 - номер единичного теста)

##################
Запуск всех тестов
##################
npm run all-tests

!!По умолчанию запускается параллельно только 1 тест. При желании это можно изменить в файле package.json!!

НЕ ПОЛУЧАЕТСЯ СДЕЛАТЬ НОВЫЙ PR:
There isn’t anything to compare.
master and igor_tests are entirely different commit histories.
