
import http from "../http-common";

class WorkDataService {
  getAll() {
    return http.get("/works");
  }

  get(id) {
    return http.get(`/works/${id}`);
  }

  create(data) {
    return http.post("/works", data);
  }

  update(id, data) {
    return http.put(`/works/${id}`, data);
  }

  delete(id) {
    return http.delete(`/works/${id}`);
  }

  deleteAll() {
    return http.delete(`/works`);
  }

  findByTitle(title) {
    return http.get(`/works?title=${title}`);
  }
}

export default new WorkDataService();