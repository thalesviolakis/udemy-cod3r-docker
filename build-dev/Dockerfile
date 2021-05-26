FROM python:3.6
LABEL maintainer 'Thales Violakis <contato@thalesviolakis.com>'

RUN useradd www && \
    mkdir /app && \
    mkdir /log && \
    chown www /log

USER www
VOLUME /log
#diretorio corrente
WORKDIR /app
#Porta que está configurada no script py linha 21
EXPOSE 8000

#processo que será executado
ENTRYPOINT ["/usr/local/bin/python"]
CMD ["run.py"]
