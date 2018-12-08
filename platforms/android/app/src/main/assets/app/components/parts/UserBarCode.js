module.exports = {
    data() {
        return {
            code: 1234567890
        };
    },
    computed: {
        
    },
    template: `
    <Page>
        <StackLayout>
          <Image class="m-20" src="~/images/BarCodeExample.jpg"/>
          <Label class="p-20 h1 text-center" text="Twój kod"/>
        </StackLayout>
    </Page>
  `,
};
