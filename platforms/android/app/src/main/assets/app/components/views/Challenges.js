const App = require('./../App');
const UserBarCode = require('./../parts/UserBarCode');
const ChallengeDetails = require('./../parts/ChallengeDetails');

module.exports = {
    data() {
        return {
            challenges: [
                {
                    id: 1,
                    name: 'Lorem ipsum',
                    timeLimit: '3h00m',
                    description: ' Nam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
                {
                    id: 2,
                    name: 'Dolor sit',
                    timeLimit: '6h00m',
                    description: 'Wam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
                {
                    id: 2,
                    name: 'Dolor sit',
                    timeLimit: '6h00m',
                    description: 'Wam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
                {
                    id: 2,
                    name: 'Dolor sit',
                    timeLimit: '6h00m',
                    description: 'Wam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
                {
                    id: 2,
                    name: 'Dolor sit',
                    timeLimit: '6h00m',
                    description: 'Wam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
                {
                    id: 2,
                    name: 'Dolor sit',
                    timeLimit: '6h00m',
                    description: 'Wam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
                {
                    id: 2,
                    name: 'Dolor sit',
                    timeLimit: '6h00m',
                    description: 'Wam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
                {
                    id: 2,
                    name: 'Dolor sit',
                    timeLimit: '6h00m',
                    description: 'Wam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
                {
                    id: 2,
                    name: 'Dolor sit',
                    timeLimit: '6h00m',
                    description: 'Wam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
                {
                    id: 2,
                    name: 'Dolor sit',
                    timeLimit: '6h00m',
                    description: 'Wam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
                {
                    id: 2,
                    name: 'Dolor sit',
                    timeLimit: '6h00m',
                    description: 'Wam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
                {
                    id: 2,
                    name: 'Dolor sit',
                    timeLimit: '6h00m',
                    description: 'Wam laoreet libero non quam elementum, ac dapibus est ultricies. Vestibulum facilisis, elit nec blandit imperdiet, purus erat scelerisque erat, sed rutrum augue massa vel nisl.'
                },
            ]
        };
    },
    template: `
    <Page class="page">
      <ActionBar class="action-bar" title="RzeTour">
        <GridLayout columns="50, auto, *, auto, auto" rows="auto">
           <Image src="~/images/iconBadge.svg.png" height="40" row="0" col="0" />
           <Label text="Wyzwania" fontSize="24" row="0" col="1"/>
           <Image src="~/images/iconGears.png" height="40" style="opacity: 0.6; margin-right: 50px" row="0" col="3" />
           <Image @tap="showBarCode()" src="~/images/iconBarCodes1.svg.png" height="40" style="opacity: 0.6; margin-right: 50px" row="0" col="4" />
        </GridLayout>
      </ActionBar>
      
      <ScrollView>
        <ListView for="challenge in challenges">
          <v-template>
            <GridLayout columns="auto, *, auto, auto" rows="60">
              <Label :text="challenge.name" class="h3 m-l-20" row="0" col="0" verticalAlignment="center" />
              <Label :text="challenge.timeLimit" class="h3 m-x-20" row="0" col="2" verticalAlignment="center" />
              <Image @tap="showChallenge(challenge)" src="~/images/iconPlus.svg.png" height="25" row="0" col="3" class="m-r-20"/>
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
        showChallenge(challenge) {
            this.$showModal(ChallengeDetails, { props: { challenge }})
                .then(data => console.log(data));
        },
        showBarCode() {
            this.$showModal(UserBarCode)
        },
    }
};
