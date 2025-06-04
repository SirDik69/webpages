FROM alpine:latest

RUN apk add --no-cache curl tar bind-tools && \
    curl -s -L -o adguardhome.tar.gz https://github.com/AdguardTeam/AdGuardHome/releases/latest/download/AdGuardHome_linux_amd64.tar.gz && \
    tar -xzf adguardhome.tar.gz && \
    rm adguardhome.tar.gz && \
    mkdir -p /data

EXPOSE 80
WORKDIR /AdGuardHome

CMD ["./AdGuardHome", "--no-check-update", "-c", "/data/AdGuardHome.yaml", "-w", "/data"]
