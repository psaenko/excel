<template>
  <div id="app">
    <file-pond
        name="file"
        ref="pond"
        :label-idle="placeholder"
        v-bind:allow-multiple="true"
        accepted-file-types="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        :server="server"
        v-on:processfiles="loaded"
        v-on:removefile="removeFile"
        v-bind:files="[...myFiles]"
        :maxFiles="maxFiles"
    />
  </div>
</template>

<script>
import vueFilePond from "vue-filepond";

import "filepond/dist/filepond.min.css";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
);


export default {
  name: "FileUpload",
  props: {
    maxFiles: null,
    files: [],
    placeholder: {
      type: String,
      default: 'Оберіть або перетягніть файл'
    },
  },
  data: function () {
    return {
      server: `http://localhost:3000/api/upload`,
      myFiles: [],
    };
  },
  methods: {
    loaded() {
      this.files.length = 0
      let a = this.$refs.pond.getFiles()
      for (let i = 0; i < a.length; i++) {
        this.files.push({"URL": JSON.parse(a[i].serverId).url})
      }

    },
    removeFile() {
      this.files.length = 0
      let a = this.$refs.pond.getFiles()
      for (let i = 0; i < a.length; i++) {
        this.files.push({"URL": JSON.parse(a[i].serverId).url})
      }
    }
  },
  components: {
    FilePond,
  },
};
</script>

<style scoped>
.filepond--wrapper{
  margin-top: 30px;
}


</style>
