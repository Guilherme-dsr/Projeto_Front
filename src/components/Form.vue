<template>
  <div>
    <div class="form">
        <b-form>

          <b-form-group id="input-group-2" label="Seu Nome" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.nome"
              placeholder="Nome"
              required
            ></b-form-input>
          </b-form-group>
          
          <b-form-group id="input-group-2" label="Salario:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.salary"
              placeholder="Salario"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Ativo:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.active"
              :options="active"
              required
            ></b-form-select>
          </b-form-group><br>

          <b-button type="submit" variant="primary">Enviar</b-button>
          <b-button type="reset" variant="danger">Limpar Formulário</b-button>
        </b-form>
    </div>
    <div>
      <b-table striped hover :items="dados" :fields="fields"></b-table>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          nome: '',
          salary:null,
          active: null,
        },
        active: [{ text: 'Selecione', value: null }, 'Sim', 'Não'],
        fields: ['Nome', 'Salario', 'Ativo'],
        dados: []
      }
    },
    methods: {

    },
    created(){

    }
  }
</script>

<style>
.form {
    margin-top: 10%;
    margin:5%;
    display: flex;
    align-items: start;
    justify-content: center;
}
</style>