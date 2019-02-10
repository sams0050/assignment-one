<template>
  <div class="forms">
    <el-form ref="form" :model="form" label-width="20px">
      <el-form-item label="First Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Last Name">
        <el-input v-model="form.name2"></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        label="Email"
        :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
      >
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Subject">
        <el-input v-model="form.subject"></el-input>
      </el-form-item>
      <el-form-item label="Request Form Info">
        <el-input
          type="textarea"
          autosize="{ minRows: 2, maxRows:"
          placeholder="Type Here"
          v-model="textarea2"
        ></el-input>
      </el-form-item>
      <div style="margin: 20px 0;"></div>
      <!-- `checked` should be true or false -->
      <el-form-item label="Terms & Conditions">
        <el-checkbox v-model="unchecked">I Agree</el-checkbox>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="centerDialogVisible = true">Submit</el-button>
      </el-form-item>

      <el-dialog
        class="popup"
        :visible.sync="centerDialogVisible"
        width="100%"
        fullscreen="true"
        modal-append-to-body="true"
        center
      >
        <div style="margin: 25px;"></div>
        <span>Confirm to Submit</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="text" @click="centerDialogVisible = false">Confirm</el-button>
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
        </span>
      </el-dialog>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<script src="./claim.js"></script>
<style src="./claim.css" scoped></style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
