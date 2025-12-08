'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, UserCheck, Ban, RefreshCw, AlertCircle, Shield } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Scale className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Termos de Uso</h1>
          <p className="text-muted-foreground">
            Última atualização: 7 de dezembro de 2025
          </p>
        </div>

        <div className="space-y-6">
          {/* Introdução */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Bem-vindo ao Portfólio de Nathalye Vitoria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso em o acesso e uso deste site portfólio, 
                de propriedade e operado por Nathalye Vitoria Felix, estudante de Mecatrônica 
                no IFSP - Campus Guarulhos e Eletricista de Manutenção Eletroeletrônica no 
                Senai Hermenegildo Campos de Almeida.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar ou usar este site, você concorda em cumprir e estar vinculado a estes 
                Termos. Se você não concordar com qualquer parte destes Termos, não deve usar este site.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Importante:</strong> Este é um portfólio profissional e acadêmico. 
                  O objetivo principal é apresentar projetos, certificações e habilidades técnicas 
                  para fins de networking profissional e oportunidades de carreira.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Aceitação dos Termos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                1. Aceitação dos Termos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e navegar neste site, você aceita e concorda em estar vinculado aos 
                termos e condições aqui estabelecidos. Estes Termos se aplicam a todos os visitantes, 
                usuários e outras pessoas que acessam ou usam o site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Se você está acessando ou usando o site em nome de uma empresa ou outra entidade 
                legal, você declara que tem autoridade para vincular essa entidade a estes Termos. 
                Nesse caso, "você" e "seu" referem-se a essa entidade.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao utilizar este site, você confirma que leu, compreendeu e concordou com estes 
                Termos de Uso e nossa Política de Privacidade.
              </p>
            </CardContent>
          </Card>

          {/* Sobre o Site */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                2. Sobre Este Site
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Este site é um portfólio profissional e acadêmico que apresenta:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Projetos desenvolvidos durante a formação acadêmica e profissional</li>
                <li>Certificações e qualificações técnicas obtidas</li>
                <li>Habilidades e competências na área de Mecatrônica e Eletroeletrônica</li>
                <li>Informações de contato para networking profissional</li>
                <li>Experiências e conhecimentos compartilhados</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                O conteúdo apresentado reflete o trabalho acadêmico e profissional de Nathalye Vitoria, 
                desenvolvido em instituições como IFSP (Instituto Federal de São Paulo) e Senai 
                (Serviço Nacional de Aprendizagem Industrial).
              </p>
            </CardContent>
          </Card>

          {/* Uso Permitido */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                3. Uso Permitido do Site
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Você está autorizado a usar este site para os seguintes propósitos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Visualizar e conhecer os projetos e trabalhos apresentados</li>
                <li>Obter informações sobre certificações e qualificações</li>
                <li>Avaliar habilidades e competências técnicas</li>
                <li>Entrar em contato para oportunidades profissionais</li>
                <li>Networking e conexões profissionais</li>
                <li>Compartilhar o portfólio com terceiros interessados</li>
                <li>Uso pessoal e não comercial de visualização</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Você concorda em usar o site apenas para fins legais e de acordo com estes Termos, 
                respeitando todas as leis e regulamentos aplicáveis.
              </p>
            </CardContent>
          </Card>

          {/* Uso Proibido */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ban className="h-5 w-5" />
                4. Uso Proibido
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Você concorda em NÃO usar o site para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Violar qualquer lei ou regulamento local, estadual, nacional ou internacional</li>
                <li>Transmitir material que seja difamatório, obsceno, ofensivo, fraudulento ou ilegal</li>
                <li>Fazer-se passar por Nathalye Vitoria ou qualquer outra pessoa ou entidade</li>
                <li>Tentar obter acesso não autorizado ao site, servidores ou sistemas relacionados</li>
                <li>Interferir, interromper ou sobrecarregar o funcionamento do site</li>
                <li>Coletar, rastrear ou armazenar informações pessoais de outros usuários</li>
                <li>Usar o site para spam, phishing, malware ou outras atividades maliciosas</li>
                <li>Copiar, reproduzir, distribuir ou criar trabalhos derivados sem autorização</li>
                <li>Usar bots, scrapers, crawlers ou outras ferramentas automatizadas sem permissão</li>
                <li>Remover, alterar ou ocultar avisos de direitos autorais ou propriedade</li>
                <li>Usar o conteúdo para fins comerciais sem autorização expressa</li>
                <li>Realizar engenharia reversa ou tentar extrair código-fonte</li>
                <li>Utilizar qualquer conteúdo para alimentar modelos de IA, Machine Learning, Deep Learning, etc</li>
              </ul>
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-lg mt-4">
                <p className="text-sm text-red-900 dark:text-red-100">
                  <strong>Aviso:</strong> Violações destes termos podem resultar em suspensão 
                  imediata do acesso ao site e possíveis ações legais conforme a legislação brasileira.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Propriedade Intelectual */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                5. Propriedade Intelectual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">5.1. Conteúdo do Site</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Todo o conteúdo deste site, incluindo mas não limitado a textos, gráficos, 
                  logotipos, imagens, fotografias, vídeos, áudios, código-fonte, design, layout 
                  e compilação de dados, é de propriedade de Nathalye Vitoria Felix ou de seus 
                  licenciadores e está protegido por leis brasileiras e internacionais de direitos 
                  autorais, marcas registradas e propriedade intelectual.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5.2. Projetos e Trabalhos Acadêmicos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Os projetos apresentados neste portfólio são de autoria de Nathalye Vitoria ou 
                  foram desenvolvidos em colaboração com instituições de ensino (IFSP, Senai) e 
                  colegas de curso. Quando aplicável, os créditos e colaboradores são devidamente 
                  mencionados.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  O uso, reprodução ou adaptação destes projetos para fins acadêmicos, comerciais 
                  ou de qualquer outra natureza requer citação apropriada e autorização prévia por 
                  escrito.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5.3. Uso Permitido do Conteúdo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Você pode visualizar e baixar o conteúdo do site apenas para uso pessoal, 
                  não comercial e informativo. Qualquer outro uso, incluindo mas não limitado a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-2">
                  <li>Reprodução para fins comerciais</li>
                  <li>Modificação ou criação de trabalhos derivados</li>
                  <li>Distribuição pública ou republicação</li>
                  <li>Uso em outros sites ou plataformas</li>
                  <li>Incorporação em produtos ou serviços</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Requer autorização prévia por escrito de Nathalye Vitoria Felix.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5.4. Marcas e Logotipos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Todas as marcas, logotipos e nomes de serviços exibidos neste site são 
                  propriedade de seus respectivos donos. O uso não autorizado de qualquer 
                  marca ou logotipo é estritamente proibido.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Links Externos */}
          <Card>
            <CardHeader>
              <CardTitle>6. Links para Sites de Terceiros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Este site pode conter links para sites e recursos de terceiros, incluindo:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Redes sociais profissionais (GitHub, LinkedIn)</li>
                <li>Plataformas de comunicação (WhatsApp, Email)</li>
                <li>Repositórios de projetos e código-fonte</li>
                <li>Instituições de ensino (IFSP, Senai)</li>
                <li>Plataformas de certificação</li>
                <li>Ferramentas e tecnologias mencionadas</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Estes links são fornecidos apenas para sua conveniência e informação. Não temos 
                controle sobre o conteúdo, políticas de privacidade, práticas ou disponibilidade 
                de sites de terceiros e não assumimos responsabilidade por eles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A inclusão de qualquer link não implica endosso, aprovação ou recomendação do 
                site vinculado. Recomendamos que você leia os termos de uso e políticas de 
                privacidade de qualquer site de terceiros que visitar.
              </p>
            </CardContent>
          </Card>

          {/* Isenção de Garantias */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                7. Isenção de Garantias
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Este site é fornecido "como está" e "conforme disponível", sem garantias de 
                qualquer tipo, expressas ou implícitas, incluindo mas não limitado a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Garantias de comercialização ou adequação a um propósito específico</li>
                <li>Garantias de que o site estará sempre disponível, acessível ou livre de erros</li>
                <li>Garantias de que o conteúdo é preciso, completo, atualizado ou confiável</li>
                <li>Garantias de que o site está livre de vírus, malware ou outros componentes prejudiciais</li>
                <li>Garantias de que defeitos ou erros serão corrigidos</li>
                <li>Garantias de resultados específicos do uso do site</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Não garantimos que o site atenderá às suas necessidades, expectativas ou requisitos 
                específicos. O uso do site é por sua conta e risco.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg mt-4">
                <p className="text-sm text-yellow-900 dark:text-yellow-100">
                  <strong>Aviso:</strong> As informações sobre projetos, certificações e habilidades 
                  são fornecidas para fins informativos e podem estar sujeitas a alterações sem aviso prévio.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitação de Responsabilidade */}
          <Card>
            <CardHeader>
              <CardTitle>8. Limitação de Responsabilidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Na extensão máxima permitida pela lei brasileira, Nathalye Vitoria Felix não será 
                responsável por quaisquer danos diretos, indiretos, incidentais, especiais, 
                consequenciais, punitivos ou exemplares resultantes de ou relacionados a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Uso ou incapacidade de usar o site</li>
                <li>Acesso não autorizado ou alteração de suas transmissões ou dados</li>
                <li>Declarações, conduta ou conteúdo de terceiros no site</li>
                <li>Erros, omissões ou imprecisões no conteúdo</li>
                <li>Perda de dados, lucros, receitas ou oportunidades</li>
                <li>Interrupção ou suspensão do serviço</li>
                <li>Vírus ou outros componentes prejudiciais</li>
                <li>Qualquer outro assunto relacionado ao site</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Esta limitação se aplica independentemente de termos sido avisados ou não da 
                possibilidade de tais danos e mesmo que um recurso estabelecido nestes Termos 
                falhe em seu propósito essencial.
              </p>
            </CardContent>
          </Card>

          {/* Precisão das Informações */}
          <Card>
            <CardHeader>
              <CardTitle>9. Precisão das Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Embora nos esforcemos para manter as informações neste site precisas, completas 
                e atualizadas, não garantimos a precisão, integridade ou atualidade de qualquer 
                informação apresentada.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As informações sobre projetos, certificações, habilidades e experiências são 
                fornecidas para fins informativos e profissionais. Podem ocorrer erros tipográficos, 
                imprecisões ou omissões, e as informações podem estar desatualizadas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e 
                de alterar ou atualizar informações a qualquer momento sem aviso prévio.
              </p>
            </CardContent>
          </Card>

          {/* Modificações */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                10. Modificações dos Termos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar, alterar ou substituir estes Termos a 
                qualquer momento, a nosso exclusivo critério. As modificações entrarão em vigor 
                imediatamente após a publicação dos Termos revisados neste site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Se uma revisão for considerada material, tentaremos fornecer um aviso com pelo 
                menos 30 dias de antecedência antes que os novos termos entrem em vigor. O que 
                constitui uma mudança material será determinado a nosso exclusivo critério.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                É sua responsabilidade revisar periodicamente estes Termos para verificar 
                alterações. Ao continuar a acessar ou usar nosso site após essas revisões 
                entrarem em vigor, você concorda em estar vinculado aos termos revisados.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mt-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Dica:</strong> Recomendamos que você salve ou imprima uma cópia destes 
                  Termos para seus registros. A data da última atualização está sempre indicada 
                  no topo desta página.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Lei Aplicável */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                11. Lei Aplicável e Jurisdição
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis da 
                República Federativa do Brasil, sem considerar suas disposições sobre conflitos 
                de leis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Qualquer disputa, controvérsia ou reclamação decorrente de ou relacionada a 
                estes Termos, incluindo sua formação, interpretação, violação ou rescisão, 
                será submetida à jurisdição exclusiva dos tribunais competentes de Guarulhos, 
                Estado de São Paulo, Brasil.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Você concorda irrevogavelmente em se submeter à jurisdição exclusiva desses 
                tribunais e renuncia a qualquer objeção à jurisdição ou local desses tribunais.
              </p>
            </CardContent>
          </Card>

          {/* Divisibilidade */}
          <Card>
            <CardHeader>
              <CardTitle>12. Divisibilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Se qualquer disposição destes Termos for considerada inválida, ilegal ou 
                inexequível por um tribunal de jurisdição competente, tal disposição será 
                modificada e interpretada para cumprir os objetivos de tal disposição na 
                maior extensão possível sob a lei aplicável.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                As disposições restantes permanecerão em pleno vigor e efeito. A invalidade 
                ou inexequibilidade de qualquer disposição não afetará a validade ou 
                exequibilidade das demais disposições destes Termos.
              </p>
            </CardContent>
          </Card>

          {/* Renúncia */}
          <Card>
            <CardHeader>
              <CardTitle>13. Renúncia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                A falha em exercer ou fazer cumprir qualquer direito ou disposição destes 
                Termos não constituirá uma renúncia a tal direito ou disposição. Qualquer 
                renúncia a qualquer disposição destes Termos será efetiva apenas se for por 
                escrito e assinada pela parte renunciante.
              </p>
            </CardContent>
          </Card>

          {/* Acordo Integral */}
          <Card>
            <CardHeader>
              <CardTitle>14. Acordo Integral</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso, juntamente com nossa Política de Privacidade e quaisquer 
                outros avisos legais publicados neste site, constituem o acordo integral entre 
                você e Nathalye Vitoria Felix em relação ao uso deste site.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Estes Termos substituem todos os acordos, entendimentos, negociações e discussões 
                anteriores ou contemporâneas, sejam escritos ou orais, entre você e nós em relação 
                ao assunto destes Termos.
              </p>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                15. Entre em Contato
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas, comentários ou preocupações sobre estes Termos de Uso, 
                entre em contato conosco:
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p><strong>Nome:</strong> Lucas Gomes Leria</p>
                <p><strong>Email:</strong> <a href="mailto:suporte-portfolio-nathalye-vitoria@googlegroups.com" className="text-primary hover:underline">suporte-portfolio-nathalye-vitoria@googlegroups.com</a></p>
                <p><strong>Telefone:</strong> <a href="tel:11945735280" className="text-primary hover:underline">(11) 94573-5280</a></p>
                <p><strong>Localização:</strong> São Paulo - Brasil</p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Faremos o possível para responder a todas as consultas dentro de 48 horas úteis.
              </p>
            </CardContent>
          </Card>

          {/* Reconhecimento */}
          <Card className="border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle>16. Reconhecimento e Aceitação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                AO USAR ESTE SITE, VOCÊ RECONHECE QUE LEU, COMPREENDEU E CONCORDOU EM ESTAR 
                VINCULADO A ESTES TERMOS DE USO E À NOSSA POLÍTICA DE PRIVACIDADE.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Se você não concordar com estes Termos, não use este site. Seu uso continuado 
                do site após a publicação de alterações a estes Termos significa que você aceita 
                e concorda com as alterações.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-purple-200 dark:border-purple-800 p-4 rounded-lg mt-4">
                <p className="text-sm text-purple-900 dark:text-purple-100">
                  <strong>Obrigado por visitar meu portfólio!</strong> Espero que você encontre 
                  informações úteis sobre meus projetos e habilidades. Sinta-se à vontade para 
                  entrar em contato para oportunidades de colaboração ou networking profissional.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Link para Privacidade */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground">
              Leia também nossa{' '}
              <Link href="/privacy" className="text-primary hover:underline font-semibold">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
