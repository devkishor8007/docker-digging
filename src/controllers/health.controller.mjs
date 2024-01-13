function health(req, res) {
  const healthCheck = {
    status: "ok",
    uptime: process.uptime(),
  };
  res.status(200).json(healthCheck);
}

export { health };
