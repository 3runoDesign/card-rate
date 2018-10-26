<template>
<div class="">
  <section class="hero is-success is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Precificar produto ou serviço
      </h1>

      <b-field label="Valor do produto/serviço">

        <div class="control">
          <money class="input" v-model="valor_total" v-bind="money"></money>
        </div>

      </b-field>

      <b-field label="Valor do desconto">
        <b-input type="number" v-model="desconto"
          icon-pack="fas"
          icon="percent"></b-input>
      </b-field>

      <b-field label="Qual o plano de recebimento?">
        <b-select placeholder="Selecione o plano de recebimento"
        v-model="juros_selected">
            <option
                v-for="(tarifa, key) in tarifas"
                :value="key"
                :key="key">
                {{ tarifa.dias }} dias
            </option>
        </b-select>
      </b-field>

    <button class="button is-primary is-medium"
        @click="isCardModalActive = true">
        Gerar valor
    </button>

    </div>
  </div>
  </section>

  <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
      <div class="card">
          <div class="card-content">
              <div class="content">

                  <div class="notification is-primary">
                    <h1 class="title">R$ {{ (parseFloat(valor_total).toFixed(2)).toLocaleString('pt-BR') }}</h1>
                    <h2 class="subtitle">Valor normal sem desconto</h2>
                  </div>

                  <div class="notification is-link" v-if="desconto">
                    <h1 class="title">R$ {{ (parseFloat(valor_total - (valor_total * (desconto/100) )).toFixed(2)).toLocaleString('pt-BR') }}</h1>
                    <h2 class="subtitle">Valor com desconto de {{ desconto }}%</h2>
                  </div>

                  <div class="notification is-info">

                    <h1 class="title"><i class="fab fa-cc-visa"></i> R$ {{ (parseFloat((valor_total - (valor_total * (desconto/100) )) / (1 - parseFloat((tarifas[juros_selected].juros / 100)))).toFixed(2)).toLocaleString('pt-BR') }}</h1>
                    <h2 class="subtitle">Valor para parcelamento</h2>
                  </div>
              </div>
          </div>
      </div>
  </b-modal>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isCardModalActive: false,

      valor_total: 2403,
      desconto: 0,
      valor_receber: 0,

      juros_selected: 2,
      tarifas: [
        {
          dias: 1,
          juros: 5.59
        },
        {
          dias: 14,
          juros: 4.59
        },
        {
          dias: 30,
          juros: 3.79
        },
      ],

      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: false
      }
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
