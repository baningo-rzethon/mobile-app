const App = require('./../App');
const UserBarCode = require('./../parts/UserBarCode');
const PrizeDetails = require('./../parts/PrizeDetails');

module.exports = {
    data() {
        return {
            prizes: [
                {
                    id: 1,
                    name: 'Talon',
                    description: 'Na balon'
                },
            ]
        };
    },
    template: `
    <Page class="page">
      <ActionBar class="action-bar" title="RzeTour">
        <GridLayout columns="50, auto, *, auto, auto" rows="auto">
           <Image src="~/images/iconPrize.svg.png" height="40" row="0" col="0" />
           <Label text="Nagrody" fontSize="24" row="0" col="1"/>
           <Image src="~/images/iconGears.png" height="40" style="opacity: 0.6; margin-right: 50px" row="0" col="3" />
           <Image @tap="showBarCode()" src="~/images/iconBarCodes1.svg.png" height="40" style="opacity: 0.6; margin-right: 50px" row="0" col="4" />
        </GridLayout>
      </ActionBar>
      
      <ScrollView>
        <ListView for="prize in prizes">
          <v-template>
            <GridLayout columns="*" rows="*, *" @tap="showPrize(prize)">
              <Label :text="prize.name" class="h2 m-l-20" row="0" col="0" verticalAlignment="center" />
              <Label :text="prize.description" class="h3 m-x-20" row="1" col="0" verticalAlignment="center" />
            </GridLayout>
          </v-template>
        </ListView>
      </ScrollView>
    </Page>
  `,
    mounted() {
        //TODO request apis
    },
    methods: {
        goHome() {
            this.$navigateTo(App);
        },
        showBarCode() {
            this.$showModal(UserBarCode)
        },
        showPrize(prize) {
            this.$showModal(PrizeDetails, { props: { prize }})
                .then(data => console.log(data));
        },
    }
};
