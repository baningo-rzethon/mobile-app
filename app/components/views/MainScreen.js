const Map = require('./../Map');
const Preferences = require('./Preferences');
const Challenges = require('./Challenges');

module.exports = {
    data() {
        return {};
    },
    template: `
    <GridLayout columns="*, *" rows="*, *, *, *">
        <StackLayout @tap="goToChallenges()" row="0" col="0" class="btn">
            <Image src="~/images/iconBadge.svg.png" height="100" col="0" row="2" class="m-b-10" />
            <Label col="0" row="3" class="text-center h3">Wyzwania</Label>
            
        </StackLayout>
        <StackLayout @tap="goToPreferences()" row="0" col="1" class="btn">
            <Image src="~/images/iconStar.svg.png" height="100" col="1" row="2" class="m-b-10" />
            <Label col="1" row="3" class="text-center h3">Preferencje</Label>
        </StackLayout>
    </GridLayout>
  `,
    methods: {
        goToChallenges() {
            this.$navigateTo(Challenges);
        },
        goToPreferences() {
            this.$navigateTo(Preferences);
        },
    }
};
