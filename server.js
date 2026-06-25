import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 1234;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/src', express.static(path.join(__dirname, "styles")));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "pages/index.html"));
});

app.listen(PORT, () => console.log(`The server is listening to the port ${PORT}`));
