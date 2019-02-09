export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      centerDialogVisible: false,

      textarea2: '',

      checked: true
    }
  },
  rules: {
    name: [
      {
        required: true,
        message: 'Please input Activity name',
        trigger: 'blur'
      },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
    ],
    region: [
      {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change'
      }
    ],
    type: [
      {
        type: 'array',
        required: true,
        message: 'Please select at least one activity type',
        trigger: 'change'
      }
    ]
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
