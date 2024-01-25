import fs from 'fs/promises';
import path from 'path';

export default async (req, res) => {
  try {
    // Caminho absoluto para o arquivo projects.json
    const filePath = path.join(process.cwd(), 'public', 'projects.json');

    // Leitura do arquivo e envio como resposta
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const projects = JSON.parse(fileContent);

    res.status(200).json(projects);
  } catch (error) {
    console.error('Error reading projects.json:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
