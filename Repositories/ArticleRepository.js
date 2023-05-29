const Article = require("../Models/Article");

// Classe com os métodos CRUD
class ArticleRepository {
  // Método para criar uma nova instância
  async create(data) {
    try {
      const instance = await Article.create(data);
      return instance;
    } catch (error) {
      throw new Error("Erro ao criar uma nova instância de Artigo.");
    }
  }

  // Método para obter todas as instâncias
  async read() {
    try {
      const instances = await Article.findAll();
      return instances;
    } catch (error) {
      throw new Error("Erro ao obter as instâncias de Artigo.");
    }
  }

  // Método para atualizar uma instância
  async update(id, data) {
    try {
      const instance = await Article.findByPk(id);
      if (instance) {
        await instance.update(data);
        return instance;
      }
      throw new Error(`Instância de Artigo com id ${id} não encontrada.`);
    } catch (error) {
      throw new Error(`Erro ao atualizar a instância de Artigo com id ${id}.`);
    }
  }

  // Método para deletar uma instância
  async delete(id) {
    try {
      const instance = await Article.findByPk(id);
      if (instance) {
        await instance.destroy();
        return true;
      }
      throw new Error(`Instância de Artigo com id ${id} não encontrada.`);
    } catch (error) {
      throw new Error(`Erro ao deletar a instância de Artigo com id ${id}.`);
    }
  }
}

module.exports = new ArticleRepository();
