<template>
    <main class="game">
            <h3 class="jeu__title">{{jeu.title.rendered}}</h3>
            <article class="jeu">
                <img class="jeu__img" :src="jeu.acf.image_jeu" alt="Logo TGC">
                <ul class="jeu__list">
                    <li class="jeu__desc">{{jeu.acf.statut.taxonomy}} : {{jeu.acf.statut.name}}</li>
                    <li v-for="nft in jeu.acf.nft_support" :key="nft.id" class="jeu__desc">NFT-SUPPORT : {{nft}}</li>
                    <li class="jeu__desc">FREE-TO-PLAY : {{jeu.acf.free_to_play[0]}}</li>
                    <li v-for="play in jeu.acf.play_to_earn" :key="play.id" class="jeu__desc">PLAY-TO-EARN : {{play}}</li>
                    <li class="jeu__desc crypto">BLOCKCHAIN :
                        <ul class="crypto__list">
                                <li class="crypto__item" v-for="chain in jeu.acf.blockchain" :key="chain.id" ><img class="crypto__icon" :src="chain.logo_blockchain" :alt="chain.titre_blockchain"></li>
                        </ul>
                    </li>
                    <div class="jeu__desc genre">GENRE :
                        <li v-for="cat in jeu.acf.genre" :key="cat.id" class="genre__list"> {{cat.name}}</li>
                    </div>
                    <li class="jeu__desc devise">DEVICE :
                        <ul class="devise__list">
                            <li v-for="dev in jeu.acf.device" :key="dev.id" class="devise__item">
                                <img class="devise__icon" :src="dev.logo_device" :alt="dev.titre_device">
                            </li>
                        </ul>
                    </li>
                </ul>
            </article>

            <article class="resume">
                <p v-for="desc in jeu.acf.description" :key="desc.id" class="resume__desc">{{desc.paragraphe_jeu}}</p>
            </article>
            <article class="screenshot">
                <img v-for="screen in jeu.acf.screenshot" :key="screen.id" class="screenshot__img" :src="screen.screenshot_jeu" :alt="screen.titre_screenshot">
            </article>

            <section class="other">
                <h3 class="other__title">Other Games</h3>
                <article v-for="jeux in filteredItems" :key="jeux.id"  class="other__article card">
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
                        <img class="card__icon" src="style/assets/icon/Logo_Apple.svg" alt="Logo Apple">
                        <img class="card__icon" src="style/assets/icon/Logo_Android.svg" alt="Logo Android">
                        <img class="card__icon" src="style/assets/icon/Logo_Windows.svg" alt="Logo Windows">
                        <p class="card__desc">STATUTS : LIVE</p>
                        <p class="card__desc">NFT-SUPPORT : NO</p>
                        <p class="card__desc">FREE-TO-PLAY : YES</p>
                        <p class="card__desc">PLAY-TO-EARN : CRYPTO</p>
                    </div> -->
                    <div class="card__btn" >
                        <router-link :to="{ name: 'fiche', params: { id: jeux.id } }" @click.native="$router.go()" class="card__link">More infos</router-link>
                    </div>
                    </article>
            </section> 
    </main>
</template>
<script>
import param from '@/param/param'
export default {
    name: 'fiche',
    data () {
        return {
            jeu : {
                id : 0
            },
            liste : []
                
        }
    },
    created(){
        this.jeu.id = this.$route.params.id;
        axios.get(param.host+"jeu/"+ this.jeu.id)
        .then(response =>{
        console.log("Response", response);
        this.jeu = response.data;
        console.log("liste", this.jeu)
        })
        .catch(error => console.log(error));
        axios.get(param.host+"jeu")
        .then(response =>{
        console.log("Response", response);
        this.liste = response.data;
        console.log("liste", this.liste)
        })
        .catch(error => console.log(error))

    },
    computed: {
    filteredItems: function () {
        return this.liste.slice(0, 4)
        }
}
}
</script>
<style scoped>

</style>
