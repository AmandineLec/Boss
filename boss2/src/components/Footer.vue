<template>
     <footer class="footer">
        <router-link class="footer__logo" to="/"><img class="footer__img" src="../assets/logo/Logo_PlayToEarn_Creme.svg" alt="Loge PlayToEarn"></router-link>
        <h2 class="footer__title">Play To Earn</h2>
        <h3 class="footer__subtitle">Blockchain Game List</h3>
        <p class="footer__desc">©2022 PlayToEarn. All Rights Reserved</p>
        <nav class="footer__nav">
            <ul class="footer__list">
                <li class="footer__item company">Company
                    <ul class="company__list">
                        <li class="company__item">Terms of Use</li>
                        <li class="company__item">Privacy Policy</li>
                        <li class="company__item">Disclamer</li>
                        <li class="company__item">Methodology</li>
                    </ul>
                </li>
                <li class="footer__item support">Support
                    <ul class="support__list">
                        <li class="support__item">Contact Us</li>
                        <li class="support__item">Newsletter</li>
                        <li class="support__item">Press Kit</li>
                        <li class="support__item">Advertise</li>
                        <li class="support__item">FAQ</li>
                    </ul>
                </li>
                <li class="footer__item socials">Socials
                    <ul class="socials__list">
                        <li class="socials__item"><a class="socials__link" href="https://twitter.com/play2earncrypto"><img class="socials__icon" src="../assets/icon/Logo_Twitter.svg" alt="Logo Twitter"></a></li>
                        <li class="socials__item"><a class="socials__link" href="https://discord.com/invite/RYvHDXR"><img class="socials__icon" src="../assets/icon/Logo_Discord.svg" alt="Logo Discord"></a></li>
                        <li class="socials__item"><a class="socials__link" href="https://t.me/playtoearn_net"><img class="socials__icon" src="../assets/icon/Logo_Telegram.svg" alt="Logo Telegram"></a></li>
                        <li class="socials__item"><a class="socials__link" href="https://www.youtube.com/channel/UCvIp5zOldr7n1jDQtqvLqnA"><img class="socials__icon" src="../assets/icon/Logo_Youtube.svg" alt="Logo Youtube"></a></li>
                        <li class="item__item"><a class="socials__link" href="https://play.google.com/store/apps/details?id=com.playtoearn.playtoearn"><img class="socials__icon" src="../assets/icon/Logo_Google_play.svg" alt="Logo Google Play"></a></li>
                        <li class="socials__item"><a class="socials__link" href="https://playtoearn.medium.com/"><img class="socials__icon" src="../assets/icon/Logo_Medium.svg" alt="Logo Medium"></a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </footer>
</template>
<script>
export default {
name: 'Footer',
data () {
    return {
    }
}
}
</script>
