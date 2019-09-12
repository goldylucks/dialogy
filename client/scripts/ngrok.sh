# this script assumes ngrok executable is in your PATH or is aliased

PORT=3001
IP="$(hostname -i | awk '{print $1}')"
ngrok http https://${IP}:${PORT} -host-header="localhost:${PORT}"
