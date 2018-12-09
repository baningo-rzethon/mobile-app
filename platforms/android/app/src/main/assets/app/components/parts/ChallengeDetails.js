module.exports = {
    props: ['challenge'],
    data() {
        return {
        };
    },
    computed: {
        timeOut() {
            return this.challenge.timeLimit/60 + 'h 00m';
        }
    },
    template: `
    <Page>
        <StackLayout class="p-10">
          <Label class="p-20 h2 font-weight-bold text-center" :text="challenge.name"/>
          <Label textWrap="true" :text="challenge.description"/>
          <Label :text="timeOut" class="h1 text-center"/>
          <Label text="limit czasu" class="h6 text-center"/>
          <Button @tap="$modal.close(challenge)" text="Rozpocznij" class="btn btn-primary"/>
        </StackLayout>
    </Page>
  `,
};
