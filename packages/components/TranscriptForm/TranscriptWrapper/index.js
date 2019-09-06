import ApiWrapper from '../../../Helpers/ApiWrapper';

const newTranscriptWrapper = async (form, projectId) => {

  try {
    console.log('inside try');

    const tester = await ApiWrapper.createTranscript(projectId, form)
      .then(response => {
        if (response.status === true) {
          console.log('YAY SUCCESS');
          const tempObj = {
            success: true,
            response: response,
            transcriptId: response.transcriptId,
            transcript: response.transcript
          };

          console.log(tempObj);

          return (tempObj);

        } else if (response.status === false) {
          console.log('BOO');
          const tempObj = {
            success: false,
          };

          return tempObj;
        }
      }).catch(() => {
        const tempObj = {
          success: false
        };

        console.log(tempObj);

        return tempObj;
      });

    return tester;

  } catch (e) {
    console.error('error submitting:::', e);
  }
};

export default newTranscriptWrapper;