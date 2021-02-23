<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar Médico</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <!--NOME-->
          <div class="form-group">
            <label class="font-weight-blod">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Nome do médico"
              v-model="doctorForm.name"
              :class="{
                'is-invalid': isSubmitted && $v.doctorForm.name.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.doctorForm.name.required"
              class="invalid-feedback"
            >
              O campo do nome do médico é obrigatório!
            </div>
          </div>
          <!--ESPECIALIDADE-->
          <div class="form-group">
            <label class="font-weight-blod">Especialidade</label>
            <input
              type="text"
              id="specialty"
              name="specialty"
              class="form-control"
              placeholder="Especialidae do médico"
              v-model="doctorForm.specialty"
              :class="{
                'is-invalid': isSubmitted && $v.doctorForm.specialty.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.doctorForm.specialty.required"
              class="invalid-feedback"
            >
              O campo da especialidade do médico é obrigatório!
            </div>
          </div>
          <!--CRM-->
          <div class="form-group">
            <label class="font-weight-blod">CRM</label>
            <input
              type="text"
              id="CRM"
              name="CRM"
              class="form-control"
              placeholder="CRM do médico"
              v-model="doctorForm.CRM"
              :class="{ 'is-invalid': isSubmitted && $v.doctorForm.CRM.$error }"
            />
            <div
              v-if="isSubmitted && !$v.doctorForm.CRM.required"
              class="invalid-feedback"
            >
              O campo da CRM do médico é obrigatório!
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']" /> Médico
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators';

export default {
  name: 'CreateDoctorComponent',
  data() {
    return {
      doctorForm: {
        name: '',
        specialty: '',
        CRM: '',
      },
      isSubmitted: false,
    };
  },
  validations: {
    doctorForm: {
      name: { required },
      specialty: { required },
      CRM: { required },
    },
  },
  methods: {
    handleSubmitForm() {
      this.isSubmitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    },
  },
};
</script>
