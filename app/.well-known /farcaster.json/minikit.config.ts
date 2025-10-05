export const minikitConfig = {
    accountAssociation: { // this will be added in step 5
      "header": "",
      "payload": "",
      "signature": ""
    },
    miniapp: {
      version: "1",
      name: "Cubey", 
      subtitle: "Your AI Ad Companion", 
      description: "Ads",
      screenshotUrls: [`$https://my-next-app-base.vercel.app/screenshot-portrait.png`],
      iconUrl: `$https://my-next-app-base.vercel.app/blue-icon.png`,
      splashImageUrl: `$https://my-next-app-base.vercel.app/blue-hero.png`,
      splashBackgroundColor: "#000000",
      homeUrl: `https://my-next-app-base.vercel.app/`,
      webhookUrl: `$https://my-next-app-base.vercel.app/api/webhook`,
      primaryCategory: "social",
      tags: ["marketing", "ads", "quickstart", "waitlist"],
      heroImageUrl: `$https://my-next-app-base.vercel.app/blue-hero.png`, 
      tagline: "",
      ogTitle: "",
      ogDescription: "",
      ogImageUrl: `https://my-next-app-base.vercel.app/blue-hero.png`,
    },
  } as const;