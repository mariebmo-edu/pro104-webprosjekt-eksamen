const CampaignModule = function(){

const campaigns = [{datofra: new Date("2020-04-01"), datotil: new Date("2021-08-01"), kampanjenavn:"2 for 1 på Coca Cola"},
{datofra: new Date("2020-04-01"), datotil: new Date("2021-08-01"), kampanjenavn:"Familiepakke for 299"},
{datofra: new Date("2022-04-01"), datotil: new Date("2022-08-01"), kampanjenavn:"Tacopizza Tirsdag"},
{datofra: new Date("2020-04-01"), datotil: new Date("2021-08-01"), kampanjenavn:"Madnass Monday"},
{datofra: new Date("2020-04-01"), datotil: new Date("2021-08-01"), kampanjenavn:"Eksamensstress 3 for 2 på stor pizza"}
]

const getAllCampaigns =()=> campaigns;
const getAllOngoingCampaigns =(today)=> {campaigns.filter((campaign) => {return campaign.datofra.getDate() <= today.getDate() && campaign.datotil.getDate() >= today.getDate()})

}
const printCampaign =(campaignObj)=> {
    return`
    <div class="ranking-info-card card column is-full">
        ${campaignObj.kampanjenavn}         
    </div>
    `
}


return {getAllCampaigns, getAllOngoingCampaigns, printCampaign}
}()

export default CampaignModule;
