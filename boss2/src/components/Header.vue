<template>
        <header class="header">
        <!--Logo du site-->
        <router-link to="/" class="header__link"><img class="header__logo" src="../assets/logo/Logo_PlayToEarn_Violet.svg" alt="Logo PlayToEarn"></router-link>
        <!--Titre s'affichant sur le site-->
        <h1 class="header__title">Play To Earn</h1>
        <!--Sous titre du site-->
        <h2 class="header__subtitle">Blockchain Game List</h2>
        <!--Navigation du site-->
        <nav class="header__nav">
            <ul class="header__list">
                <li class="header__item item">
                    <router-link to="/jeu" class="header__link">
                            <img class="header__img" src="../assets/icon/Logo_manette.svg" alt="Logo Manette">
                            Jeux
                    </router-link>
                </li>
                <li class="header__item">
                    <a class="header__link" href="#">
                        <img class="header__img" src="../assets/icon/Logo_VR.svg" alt="Logo Virtual World">
                        Virtual World
                    </a>
                </li>
                <li class="header__item">
                    <a class="header__link" href="#">
                        <img class="header__img" src="../assets/icon/Logo_Puzzle.svg" alt="Logo NFT">
                        NFTS
                    </a>
                </li>
                <li class="header__item">
                    <a class="header__link" href="#">
                        <img class="header__img" src="../assets/icon/Logo_Token.svg" alt="Logo Token">
                        Token
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
name: 'Header',
data () {
    return {
    }
}
}
</script>
