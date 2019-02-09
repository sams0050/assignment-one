<template>
  <el-form ref="form" :model="form" label-width="120px">
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
    <el-checkbox v-model="checked">I Agree</el-checkbox>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
    <el-button type="text" @click="centerDialogVisible = true">Submit</el-button>

    <el-dialog title="Warning" :visible.sync="centerDialogVisible" width="30%" center>
      <span>It should be noted that the content will not be aligned in center by default</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </el-form>
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
