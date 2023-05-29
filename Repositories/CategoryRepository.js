const Category = require("../Models/Category");

// Classe com os métodos CRUD
class CategoryRepository {
  // Método para criar uma nova instância
  async create(data) {
    try {
      const instance = await Category.create(data);
      return instance;
    } catch (error) {
      throw new Error("Erro ao criar uma nova instância de Category.");
    }
  }

  // Método para obter todas as instâncias
  async read() {
    try {
      const instances = await Category.findAll();
      return instances;
    } catch (error) {
      throw new Error("Erro ao obter as instâncias de Category.");
    }
  }

  // Método para atualizar uma instância
  async update(id, data) {
    try {
      const instance = await Category.findByPk(id);
      if (instance) {
        await instance.update(data);
        return instance;
      }
      throw new Error(`Instância de Category com id ${id} não encontrada.`);
    } catch (error) {
      throw new Error(
        `Erro ao atualizar a instância de Category com id ${id}.`
      );
    }
  }

  // Método para deletar uma instância
  async delete(id) {
    try {
      const instance = await Category.findByPk(id);
      if (instance) {
        await instance.destroy();
        return true;
      }
      throw new Error(`Instância de Category com id ${id} não encontrada.`);
    } catch (error) {
      throw new Error(`Erro ao deletar a instância de Category com id ${id}.`);
    }
  }
}

module.exports = new CategoryRepository();
