const getChannelName = require('./get-channel-name');

const getUseCasesWithChannels = async (useCases) => {
  const useCasesWithChannels = await Promise.all(
    useCases.map(async (useCase) => {
      const { data } = await fetch(
        `https://api.novu.co/v1/notification-templates/${useCase.templateIndetifiers}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `ApiKey ${process.env.GATSBY_NOVU_API_KEY}`,
          },
        }
      ).then((response) => response.json());

      const channels = data?.steps
        ?.filter((step) => step.template.type !== 'digest' && step.template.type !== 'delay')
        .map((step) => ({
          name: getChannelName(step.template.type),
          value: step.template.type,
        }));

      return { ...useCase, templateWorkflowData: data, channels };
    })
  );

  return useCasesWithChannels;
};

module.exports = getUseCasesWithChannels;
