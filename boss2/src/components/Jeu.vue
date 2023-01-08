<template>
    <main class="fiche">
            <h3 class="fiche__title">Blockchain Games List</h3>
            <div  class="fiche__container">
            <article v-for="jeu in liste" :key="jeu.id" class="fiche__article card">
                <div class="card__front">
                    <img class="card__img" :src="jeu.acf.image_jeu" alt="Logo TGC Workd">
                    <h3 class="card__title">{{jeu.title.rendered}}</h3>
                    <ul class="card__list">
                        <li v-for="chain in jeu.acf.blockchain" :key="chain.id" class="card__item"><img class="card__icon" :src="chain.logo_blockchain" :alt="chain.titre_blockchain"></li>
                    </ul>
                    <div class="card__genre">
                        <p class="card__cat" v-for="cat in jeu.acf.genre" :key="cat.id" >
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
                    <router-link :to="{ name: 'fiche', params: { id: jeu.id } }" class="card__link">More infos</router-link>
                </div>
            </article>
        </div>
    </main>
</template>
<script>
import param from '@/param/param'
export default {
    name: 'Jeu',
    data () {
        return {
            liste : []
        }
    },
    created(){
        axios.get(param.host+"jeu")
        .then(response =>{
        console.log("Response", response);
        this.liste = response.data;
        console.log("liste", this.liste)
        })
        .catch(error => console.log(error))

    }
}
</script>
<style scoped>

</style>
