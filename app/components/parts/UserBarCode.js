module.exports = {
    data() {
        return {
            code: 1234567890
        };
    },
    computed: {
        //TODO barcode
    },
    template: `
    <Page>
        <StackLayout>
          <Label class="p-20 h1 text-center" text="Twój kod"/>
          <Image class="m-20" src="~/images/BarCodeExample.jpg"/>
        </StackLayout>
    </Page>
  `,
};
