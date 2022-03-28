import React from 'react';

import Button from 'components/shared/button/button';
import CodeTabs from 'components/shared/code-tabs/code-tabs';
import Heading from 'components/shared/heading/heading';

const TITLE = 'An infrastructure that speaks your language';
const DESCRIPTION = "Community built server-side SDK's for your preferred programming language";
const BUTTON_TEXT = 'Read Docs';
const BUTTON_URL = '/';

const ITEMS = [
  {
    name: 'Node.js',
    language: 'javascript',
    code: `Purchases.shared.purchasePackage(package) { (transaction, purchaserInfo, error, userCancelled) in
      if purchaserInfo.entitlements["your_entitlement_id"]?.isActive == true {
        // Unlock that great "pro" content              
      }
    }












  `,
  },
  {
    name: 'Ruby',
    language: 'ruby',
    code: `2Purchases.shared.purchasePackage(package) { (transaction, purchaserInfo, error, userCancelled) in
      if purchaserInfo.entitlements["your_entitlement_id"]?.isActive == true {
        // Unlock that great "pro" content              
      }
    }
  `,
  },
  {
    name: 'Python',
    language: 'python',
    code: `3Purchases.shared.purchasePackage(package) { (transaction, purchaserInfo, error, userCancelled) in
      if purchaserInfo.entitlements["your_entitlement_id"]?.isActive == true {
        // Unlock that great "pro" content              
      }
    }
  `,
  },
  {
    name: 'Go',
    language: 'go',
    code: `4Purchases.shared.purchasePackage(package) { (transaction, purchaserInfo, error, userCancelled) in
      if purchaserInfo.entitlements["your_entitlement_id"]?.isActive == true {
        // Unlock that great "pro" content              
      }
    }
  `,
  },
  {
    name: 'PHP',
    language: 'php',
    code: `5Purchases.shared.purchasePackage(package) { (transaction, purchaserInfo, error, userCancelled) in
      if purchaserInfo.entitlements["your_entitlement_id"]?.isActive == true {
        // Unlock that great "pro" content              
      }
    }
  `,
  },
  {
    name: 'Curl',
    language: 'bash',
    code: `6Purchases.shared.purchasePackage(package) { (transaction, purchaserInfo, error, userCancelled) in
      if purchaserInfo.entitlements["your_entitlement_id"]?.isActive == true {
        // Unlock that great "pro" content              
      }
    }
  `,
  },
];

const Languages = () => (
  <section className="languages safe-paddings bg-gray-2 pt-24 pb-40">
    <div className="container flex items-center justify-between lg:flex-col">
      <div className="max-w-[464px] xl:max-w-[525px] lg:max-w-[782px] lg:text-center md:max-w-[712px] sm:w-full sm:max-w-none">
        <Heading size="lg" tag="h2" className="leading-tight sm:text-3xl" theme="white">
          {TITLE}
        </Heading>
        <p className="mt-5 text-lg font-light text-gray-8 sm:text-base">{DESCRIPTION}</p>
        <Button className="mt-7" to={BUTTON_URL} size="sm" theme="gray-outline">
          {BUTTON_TEXT}
        </Button>
      </div>
      <div className="order-first lg:order-last lg:mt-6 lg:w-full">
        <CodeTabs
          className="min-h-[560px] max-w-[842px] xl:min-h-[488px] xl:max-w-[600px] lg:mx-auto lg:max-w-[782px] md:max-w-[712px] sm:max-w-full"
          items={ITEMS}
        />
      </div>
    </div>
  </section>
);

export default Languages;
