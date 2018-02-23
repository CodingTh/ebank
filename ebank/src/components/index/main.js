
import axios from 'axios'
export default {
  name:"indexMain",
  data(){
  	return{
      test:"world"
    }
  },
  watch:{
    
  },
  computed:{
    fnTest:function(){
      return "Hello==>"+this.test;
    }
  },
  methods:{
    init:function(){
      console.log('init');
    }
  },
  mounted:function(){
    this.init();
  }
}