module.exports = {
    props: ['prize'],
    data() {
        return {
        };
    },
    template: `
    <Page>
        <StackLayout class="p-10">
          <Label class="p-20 h2 font-weight-bold text-center" :text="prize.name"/>
          <Label textWrap="true" :text="prize.description"/>
          <Image src="~/images/iconCoupon.svg.png"/>
        </StackLayout>
    </Page>
  `,
};
