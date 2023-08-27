const Admin = require("../Models/Admin");

// Classe com os métodos CRUD
class AdminRepository {
  // Método para criar uma nova instância
  async create(data) {
    try {
      const instance = await Admin.create(data);
      return instance;
    } catch (error) {
      throw new Error("Erro ao criar uma nova instância de Admin.");
    }
  }

  async findOne(email) {
    try {
      const instance = await Admin.findOne({ where: { email: email } });
      return instance;
    } catch (error) {}
  }

  // Método para obter todas as instâncias
  async read() {
    try {
      const instances = await Admin.findAll();
      return instances;
    } catch (error) {
      throw new Error("Erro ao obter as instâncias de Admin.");
    }
  }

  // Método para atualizar uma instância
  async update(id, data) {
    try {
      const instance = await Admin.findByPk(id);
      if (instance) {
        await instance.update(data);
        return instance;
      }
      throw new Error(`Instância de Admin com id ${id} não encontrada.`);
    } catch (error) {
      throw new Error(`Erro ao atualizar a instância de Admin com id ${id}.`);
    }
  }

  // Método para deletar uma instância
  async delete(id) {
    try {
      const instance = await Admin.findByPk(id);
      if (instance) {
        await instance.destroy();
        return true;
      }
      throw new Error(`Instância de Admin com id ${id} não encontrada.`);
    } catch (error) {
      throw new Error(`Erro ao deletar a instância de Admin com id ${id}.`);
    }
  }
}

module.exports = new AdminRepository();
