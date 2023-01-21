<template>
  <div class="container-fluid mt-5">

    <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Завантажити файл
    </button>

    <div class="vh-100 vw-100" v-if="isLoading === true">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <table class="table table-hover table-light table-bordered" v-else>
      <thead style="position: sticky;top: 0" class="thead-dark">
      <tr>
        <th scope="col">п.н.</th>
        <th scope="col">№</th>
        <th scope="col">Адреса</th>
        <th scope="col">Район</th>
        <th scope="col">Заявник ПІБ</th>
        <th scope="col">Заявник телефон</th>
        <th scope="col">Проблема/Причина</th>
        <th scope="col">Виконавець</th>
        <th scope="col">Примітка</th>
        <th scope="col">Регламент</th>
        <th scope="col">Отримано</th>
        <th scope="col">Коментар при закриті</th>
        <th scope="col">Коментар</th>
        <th scope="col">Статус</th>
      </tr>
      </thead>
      <tbody class="table-group-divider">
      <tr v-for="request in data">
        <th scope="row">{{ request.id }}</th>
        <td scope="col">{{ request.export_id }}</td>
        <td scope="col">{{ request.address }}</td>
        <td scope="col">{{ request.district }}</td>
        <td scope="col">{{ request.applicant_name }}</td>
        <td scope="col">{{ request.applicant_phone }}</td>
        <td scope="col">{{ request.problem }}</td>
        <td scope="col">{{ request.executor }}</td>
        <td scope="col">{{ request.note }}</td>
        <td scope="col">{{ request.regulations }}</td>
        <td scope="col">{{ request.received }}</td>
        <td scope="col">{{ request.сomment_when_closing }}</td>
        <td>
          <textarea placeholder="comment" :value="request.comment" @input="changeComment(request.id)"
                    style="width: 200px"/>
        </td>
        <td>
          <select class="form-select" @change="changeStatus(request.id)" style="width: 200px">
            <option :selected="request.status === 'Створено'" value="Створено">Створено</option>
            <option :selected="request.status === 'В обробці'" value="В обробці">В обробці</option>
            <option :selected="request.status === 'Вирішено'" value="Вирішено">Вирішено</option>
            <option :selected="request.status === 'Відхилено'" value="Відхилено">Відхилено</option>
          </select>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Завантажити файл</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <file-upload max-files="1" placeholder="Оберіть або перетягніть таблицю (.xls, .xlsx)" :files="files"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="loadNew()">Ок</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import {Toasts} from "../toasts";
import FileUpload from "../components/upload";

export default {
  name: 'Home',
  components: {FileUpload},
  data() {
    return {
      data: {},
      files: [],
      isLoading: true
    }
  },
  async created() {
    await this.loadNew()
  },
  methods: {
    async loadNew() {
      this.isLoading = true
      await axios.get(`http://localhost:3000/api/requests`).then(({data}) => {
        this.data = data
      })
      setTimeout(() => this.isLoading = false, 2000)
    },
    async changeComment(id) {
      await axios.patch(`http://localhost:3000/api/comments`, {
        id: id,
        data: event.target.value
      }).then(() => {

      })
    },
    async changeStatus(id) {
      await axios.patch(`http://localhost:3000/api/status`, {
        id: id,
        data: event.target.value
      }).then(() => {
        Toasts.createSuccessToast()
      })
    }
  }
}
</script>

<style scoped>
th {
  min-width: 120px;
  width: 100%;
  text-align: center;
}
</style>
