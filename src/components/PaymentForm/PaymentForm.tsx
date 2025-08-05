import React, { FC, useEffect } from "react";
import Script from "next/script";

interface PaymentFormProps {
  token: string;
  hostedPaymentPageExternalId?: string;
  currencyCode?: string;
}

const PaymentForm: FC<PaymentFormProps> = ({ token, hostedPaymentPageExternalId, currencyCode }) => {

  return (
    <>
      <Script
        src="https://cdn.aws.billingplatform.com/hosted-payments-ui@release/lib.js"
        strategy="afterInteractive"
        onLoad={() => {

          // @ts-ignore
          window.HostedPayments.renderPaymentForm(
            {
              securityToken: token,
              environmentId: process.env.NEXT_PUBLIC_BP_ENV_ID,
              apiUrl: process.env.NEXT_PUBLIC_HPP_URL,
              paymentGateways: {
                creditCard: { gateway: "Adyen_CC" },
                directDebit: { gateway: "Adyen_DD" },
              },
              targetSelector: "#payment-form",
              amount: 100,
              walletMode: false,
              currencyCode,
              hostedPaymentPageExternalId,
              accountRequest: JSON.stringify(
                {
                  "name": "TestAccName",
                  "description": "for testing purposes",
                  "additionalFields": [
                    {
                      "key": "CustomAccount1",
                      "value": "Value5_1"
                    }
                  ],
                  "billingProfileRequest": {
                    "additionalFields": [
                      {
                        "key": "BillTo",
                        "value": "BillTo Test"
                      },
                      {
                        "key": "CurrencyCode",
                        "value": "AUD"
                      },
                      {
                        "key": "Address1",
                        "value": "1234 Main St"
                      },
                      {
                        "key": "CustomBillingProfile1",
                        "value": "CustomBillingProfile5_1"
                      }
                    ]
                  }
                }
              )
            },
            {
              // successCapture: () => router.push("/portal"),
              // addPaymentMethod: () => router.push("/portal"),
            }
          );
        }}
      />
      <div id="payment-form" />
    </>
  );
};

export default PaymentForm;
