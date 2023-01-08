<template>
<main>
<div v-for="accueil in liste" :key="accueil.id" class="home">
        <section  class="section">
            <h3 class="section__title">{{accueil.acf.section[0].titre_section}}</h3>
            <img class="section__img" :src="accueil.acf.section[0].image_section" alt="Illustration gamer et argent">
            <div class="section__desc" v-for="desc in accueil.acf.section[0].description_section" :key="desc.id">
              <p>{{desc.paragraphe}}</p>
            </div>
            <div class="section__btn">
                    <a class="section__link" href="/About.html">{{accueil.acf.section[0].bouton_section}}</a> 
            </div>
        </section>

        <section class="section --about">
            <h3 class="section__title --about__title">{{accueil.acf.section[1].titre_section}}</h3>
            <img class="section__img --about__img" :src="accueil.acf.section[1].image_section" alt="Logo PlayToEarn">
            <div class="section__desc --about__desc">
              <p v-for="desc in accueil.acf.section[1].description_section" :key="desc.id">{{desc.paragraphe}}</p>
            </div>
            <div class="section__btn --about__btn">
                    <a class="section__link --about__link" href="#">{{accueil.acf.section[1].bouton_section}}</a> 
            </div>
        </section>
        <section class="section --cards">
          <h3 class="section__title --cards__title">Blockchain Games List</h3>
            <div class="--cards__container">
              <article v-for="jeux in filtre" :key="jeux.id" class="section__article card">
                <div class="card__front">
                    <img class="card__img" :src="jeux.acf.image_jeu" alt="Logo TGC Workd">
                    <h3 class="card__title">{{jeux.title.rendered}}</h3>
                    <ul class="card__list">
                        <li v-for="chain in jeux.acf.blockchain" :key="chain.id" class="card__item"><img class="card__icon" :src="chain.logo_blockchain" :alt="chain.titre_blockchain"></li>
                    </ul>
                    <div class="card__genre">
                        <p class="card__cat" v-for="cat in jeux.acf.genre" :key="cat.id" >
                            {{cat.name}}
                        </p>
                    </div>
                </div>
                <!-- <div class="card__back">
                    <p class="card__desc">DEVICE :</p>
                    <img class="card__icon" src="style/assets/icon/Logo_Web.svg" alt="Logo Web">
                    <img class="card__icon" src="style/assets/icon/Logo_Windows.svg" alt="Logo Windows">
                    <p class="card__desc">STATUTS : PRESALE</p>
                    <p class="card__desc">NFT-SUPPORT : YES</p>
                    <p class="card__desc">FREE-TO-PLAY : YES</p>
                    <p class="card__desc">Play-TO-EARN : NFT, CRYPTO</p>
                </div> -->
                <div class="card__btn" >
                    <router-link :to="{ name: 'fiche', params: { id: jeux.id } }" class="card__link">More infos</router-link>
                </div>
            </article>


        </div>
            <div class="section__btn --cards__btn">
                <a class="section__link --cards__link">{{accueil.acf.section[2].bouton_section}}</a>
            </div>
        
        </section>
    </div>
        
    </main>
</template>

<script>
import param from '@/param/param'
export default {
  name: 'Accueil', 
  data () {
    return {
      liste : [],
      listeJeu : []
    }
  },
  created(){
    axios.get(param.host+"pages")
    .then(response =>{
      console.log("Response", response);
      this.liste = response.data;
      console.log("liste", this.liste)
    })
    .catch(error => console.log(error));
    axios.get(param.host+"jeu")
        .then(response =>{
        console.log("Response", response);
        this.listeJeu = response.data;
        console.log("listeJeu", this.listeJeu)
        })
        .catch(error => console.log(error))
  },
  computed: {
    filtre : function() {
      return this.listeJeu.slice(0,4)
    }
  }
}
</script>

<style scoped>

</style>
