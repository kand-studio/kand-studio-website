type PageTitleProps = {
  title: string;
};

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="page-title">
      <p>{title}</p>
    </div>
  );
}

export default PageTitle;