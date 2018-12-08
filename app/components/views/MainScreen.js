const Map = require('./../Map');

module.exports = {
    data() {
        return {};
    },
    template: `

    <GridLayout columns="*, *" rows="auto, auto">
        <Button class="btn btn-primary" row="0" col="0" @tap="goToMap()">Mapa</Button>
        <Button class="btn btn-primary" row="0" col="1">Miejsca</Button>
        <Button class="btn btn-primary" row="1" col="0">Wyzwania</Button>
        <Button class="btn btn-primary" row="1" col="1">Preferencje</Button>
    </GridLayout>
  `,
    methods: {
    }
};
