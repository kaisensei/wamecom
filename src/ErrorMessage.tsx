interface ErrorMessageProps {
  label: string;
}

function ErrorMessage({ label }:ErrorMessageProps) {
  return (
    <div className="text-red-600">{label}</div>
  );
}

export default ErrorMessage;
