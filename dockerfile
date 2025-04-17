FROM alpine:latest

RUN apk add --no-cache curl tar

WORKDIR /opt

RUN curl -s -L -o adguardhome.tar.gz https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz && \
    tar -xzf adguardhome.tar.gz && \
    rm adguardhome.tar.gz

WORKDIR /opt/adguardhome

EXPOSE 80
EXPOSE 3000
EXPOSE 53/udp
EXPOSE 53/tcp
EXPOSE 443
EXPOSE 853

CMD ["./AdGuardHome", "-c", "/opt/adguardhome/AdGuardHome.yaml", "-w", "/opt/adguardhome"]