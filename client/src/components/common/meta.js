const Meta = ({ title, description }) => {
  const fullTitle = `${title} \u2014 James Gulland`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </>
  );
};

export default Meta;
