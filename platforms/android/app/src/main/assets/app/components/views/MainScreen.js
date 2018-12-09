const Map = require('./../Map');
const Preferences = require('./Preferences');

module.exports = {
    data() {
        return {};
    },
    template: `
    <GridLayout columns="*, *" rows="150, 150">
        <Button class="btn btn-primary" row="0" col="0" @tap="goToMap()">Mapa</Button>
        <Button class="btn btn-primary" row="0" col="1">Miejsca</Button>
        <Button class="btn btn-primary" row="1" col="0">Wyzwania</Button>
        <Button @tap="goToPreferences()" class="btn btn-primary" row="1" col="1">Preferencje</Button>
    </GridLayout>
  `,
    methods: {
        goToPreferences() {
            this.$navigateTo(Preferences);
        }
    }
};
