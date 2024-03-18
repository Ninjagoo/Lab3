// Подключение необходимых модулей
const express = require('express');
const bodyParser = require('body-parser');

// Инициализация Express приложения
const app = express();

// Промежуточное ПО для обработки запросов с телом в формате JSON
app.use(bodyParser.json());

// Хранилище заметок в памяти
let notes = [];

// Маршруты
// Получение списка всех заметок
app.get('/notes', (req, res) => {
  res.json(notes);
});

// Создание новой заметки
app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const newNote = { id: notes.length + 1, title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Обновление заметки
app.put('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const noteIndex = notes.findIndex(note => note.id === id);
  if (noteIndex !== -1) {
    notes[noteIndex] = { id, title, content };
    res.json(notes[noteIndex]);
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

// Удаление заметки
app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const noteIndex = notes.findIndex(note => note.id === id);
  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

// Установка порта и запуск сервера
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
