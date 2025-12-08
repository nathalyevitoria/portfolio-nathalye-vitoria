'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Lock, Database, Mail, FileText, RefreshCw, Cookie, Globe, UserCheck } from "lucide-react"
import Link from "next/link"
import { useCookieConsent } from "@/hooks/use-cookie-consent"
import { useToast } from "@/hooks/use-toast"

export default function PrivacyPage() {
  const { hasConsent, consentDate, revokeConsent } = useCookieConsent()
  const { toast } = useToast()

  const handleRevokeConsent = () => {
    revokeConsent()
    toast({
      title: "Consentimento Revogado",
      description: "Seus dados de consentimento foram removidos. A página será recarregada.",
    })
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
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
                Introdução
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade descreve como Nathalye Vitoria Felix coleta, usa, armazena, protege e compartilha suas informações pessoais 
                quando você visita ou interage com este portfólio profissional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Este site é um portfólio pessoal e profissional de Nathalye Vitoria, estudante de 
                Mecatrônica no IFSP - Campus Guarulhos e Eletricista de Manutenção Eletroeletrônica 
                no Senai Hermenegildo Campos de Almeida, com o objetivo de apresentar projetos, 
                certificações e habilidades técnicas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Levamos sua privacidade a sério e estamos comprometidos em proteger suas informações 
                pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) 
                e outras legislações aplicáveis.
              </p>
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Compromisso:</strong> Não vendemos, alugamos ou compartilhamos suas 
                  informações pessoais com terceiros para fins comerciais. Seus dados são usados 
                  exclusivamente para melhorar sua experiência de navegação neste portfólio.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Informações Coletadas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                1. Informações que Coletamos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  1.1. Informações de Navegação (Coletadas Automaticamente)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Quando você visita o site, coletamos automaticamente certas informações sobre 
                  seu dispositivo e sua interação com o site, incluindo:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li><strong>Informações do Dispositivo:</strong> Tipo de dispositivo, sistema operacional, versão do navegador</li>
                  <li><strong>Informações de Rede:</strong> Endereço IP, provedor de internet (ISP)</li>
                  <li><strong>Informações de Localização:</strong> Fuso horário, localização geográfica aproximada (baseada em IP)</li>
                  <li><strong>Informações de Navegação:</strong> Páginas visitadas, tempo de permanência, links clicados</li>
                  <li><strong>Informações de Referência:</strong> Site de origem (de onde você veio)</li>
                  <li><strong>Dados de Interação:</strong> Cliques, scrolls, movimentos do mouse</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Base Legal (LGPD):</strong> Legítimo interesse para melhorar o site e garantir segurança.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  1.2. Informações de Contato (Fornecidas Voluntariamente)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Se você entrar em contato através dos links de email, WhatsApp ou redes sociais 
                  fornecidos no site, podemos coletar:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Nome completo</li>
                  <li>Endereço de email</li>
                  <li>Número de telefone</li>
                  <li>Empresa ou instituição</li>
                  <li>Mensagem ou conteúdo da comunicação</li>
                  <li>Qualquer outra informação que você escolher compartilhar</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Base Legal (LGPD):</strong> Consentimento explícito ao entrar em contato.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Cookie className="h-4 w-4" />
                  1.3. Cookies e Tecnologias Similares
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência. 
                  Os cookies são pequenos arquivos de texto armazenados em seu dispositivo. 
                  Utilizamos os seguintes tipos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico 
                    do site (ex: consentimento de cookies, preferências de sessão)
                  </li>
                  <li>
                    <strong>Cookies de Preferência:</strong> Armazenam suas preferências 
                    (ex: tema claro/escuro, idioma)
                  </li>
                  <li>
                    <strong>Cookies de Análise:</strong> Ajudam a entender como os visitantes 
                    usam o site (com ferramentas como Google Analytics)
                  </li>
                  <li>
                    <strong>LocalStorage:</strong> Armazenamento local para preferências e 
                    consentimento (não expira automaticamente)
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Base Legal (LGPD):</strong> Consentimento (cookies não essenciais) e 
                  legítimo interesse (cookies essenciais).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Como Usamos as Informações */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                2. Como Usamos Suas Informações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Usamos as informações coletadas para os seguintes propósitos:
              </p>
              
              <div>
                <h3 className="font-semibold mb-2">2.1. Operação e Melhoria do Site</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Fornecer, operar e manter o site</li>
                  <li>Melhorar, personalizar e expandir o site</li>
                  <li>Entender e analisar como você usa o site</li>
                  <li>Desenvolver novos produtos, serviços, recursos e funcionalidades</li>
                  <li>Otimizar a experiência do usuário e a navegação</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2.2. Comunicação</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Responder a suas mensagens e solicitações de contato</li>
                  <li>Fornecer informações sobre projetos e habilidades</li>
                  <li>Comunicar oportunidades profissionais relevantes</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2.3. Segurança e Conformidade</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Detectar, prevenir e resolver problemas técnicos</li>
                  <li>Proteger contra fraudes, abusos e atividades ilegais</li>
                  <li>Garantir a segurança e integridade do site</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2.4. Análise e Estatísticas</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Analisar tendências de uso e comportamento dos visitantes</li>
                  <li>Medir a eficácia do conteúdo apresentado</li>
                  <li>Gerar estatísticas agregadas e anônimas</li>
                  <li>Melhorar estratégias de apresentação de projetos</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Compartilhamento de Informações */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                3. Compartilhamento de Informações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
                para fins comerciais ou de marketing. Podemos compartilhar informações apenas nas 
                seguintes situações limitadas:
              </p>

              <div>
                <h3 className="font-semibold mb-2">3.1. Provedores de Serviços</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Podemos compartilhar informações com provedores de serviços terceirizados que 
                  nos ajudam a operar o site:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li><strong>Hospedagem:</strong> Vercel (plataforma de hospedagem do site)</li>
                  <li><strong>Análise:</strong> Google Analytics ou similar</li>
                  <li><strong>CDN:</strong> Redes de distribuição de conteúdo para performance</li>
                  <li><strong>Email:</strong> Serviços de email para comunicação</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  Estes provedores têm acesso limitado às informações necessárias para executar 
                  suas funções e são obrigados a proteger suas informações.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3.2. Conformidade Legal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos divulgar suas informações quando exigido por lei ou quando acreditarmos 
                  de boa-fé que tal ação é necessária para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Cumprir uma obrigação legal ou ordem judicial</li>
                  <li>Proteger e defender nossos direitos ou propriedade</li>
                  <li>Prevenir ou investigar possíveis irregularidades</li>
                  <li>Proteger a segurança pessoal dos usuários ou do público</li>
                  <li>Proteger contra responsabilidade legal</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3.3. Links Externos e Redes Sociais</h3>
                <p className="text-muted-foreground leading-relaxed">
                  O site contém links para plataformas externas (GitHub, LinkedIn, WhatsApp) que 
                  possuem suas próprias políticas de privacidade. Não somos responsáveis pelas 
                  práticas de privacidade desses sites. Recomendamos que você leia suas políticas 
                  antes de compartilhar informações.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Transparência:</strong> Nunca compartilharemos suas informações para 
                  fins de marketing de terceiros, spam ou qualquer uso não relacionado aos 
                  propósitos descritos nesta política.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Seus Direitos LGPD */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                4. Seus Direitos (LGPD)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                De acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), 
                você tem os seguintes direitos em relação aos seus dados pessoais:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Confirmação e Acesso</h4>
                  <p className="text-sm text-muted-foreground">
                    Confirmar a existência de tratamento e acessar seus dados pessoais
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Correção</h4>
                  <p className="text-sm text-muted-foreground">
                    Corrigir dados incompletos, inexatos ou desatualizados
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Anonimização ou Bloqueio</h4>
                  <p className="text-sm text-muted-foreground">
                    Solicitar anonimização, bloqueio ou eliminação de dados desnecessários
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Portabilidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Solicitar a portabilidade dos dados a outro fornecedor
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Eliminação</h4>
                  <p className="text-sm text-muted-foreground">
                    Solicitar a eliminação dos dados tratados com seu consentimento
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Informação</h4>
                  <p className="text-sm text-muted-foreground">
                    Obter informações sobre compartilhamento de dados com terceiros
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Revogação</h4>
                  <p className="text-sm text-muted-foreground">
                    Revogar o consentimento para tratamento de dados a qualquer momento
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Oposição</h4>
                  <p className="text-sm text-muted-foreground">
                    Opor-se ao tratamento realizado com base em legítimo interesse
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Como Exercer Seus Direitos</h4>
                <p className="text-sm text-purple-900 dark:text-purple-100">
                  Para exercer qualquer um desses direitos, entre em contato através do email{' '}
                  <a href="mailto:lucasleria17@gmail.com" className="underline font-semibold">
                    lucasleria17@gmail.com
                  </a>
                  {' '}ou telefone{' '}
                  <a href="tel:11945735280" className="underline font-semibold">
                    (11) 94573-5280
                  </a>
                  . Responderemos à sua solicitação dentro de 15 dias úteis, conforme estabelecido pela LGPD.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Segurança dos Dados */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                5. Segurança dos Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de segurança técnicas, administrativas e organizacionais 
                apropriadas para proteger suas informações pessoais contra acesso não autorizado, 
                alteração, divulgação ou destruição. Isso inclui:
              </p>

              <div>
                <h3 className="font-semibold mb-2">5.1. Medidas Técnicas</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li><strong>HTTPS/SSL:</strong> Conexão criptografada em todo o site</li>
                  <li><strong>Hospedagem Segura:</strong> Plataforma confiável (Vercel) com certificações de segurança</li>
                  <li><strong>Firewall:</strong> Proteção contra acessos não autorizados</li>
                  <li><strong>Backups:</strong> Cópias de segurança regulares dos dados</li>
                  <li><strong>Atualizações:</strong> Manutenção regular de segurança e patches</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5.2. Medidas Organizacionais</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li><strong>Acesso Limitado:</strong> Apenas pessoas autorizadas têm acesso aos dados</li>
                  <li><strong>Minimização:</strong> Coletamos apenas dados necessários</li>
                  <li><strong>Revisões:</strong> Auditorias regulares de segurança</li>
                  <li><strong>Treinamento:</strong> Conscientização sobre proteção de dados</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                <p className="text-sm text-yellow-900 dark:text-yellow-100">
                  <strong>Importante:</strong> Embora implementemos medidas de segurança robustas, 
                  nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro. 
                  Não podemos garantir segurança absoluta, mas nos comprometemos a proteger suas 
                  informações da melhor forma possível.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Retenção de Dados */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                6. Retenção de Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os 
                propósitos descritos nesta Política de Privacidade, a menos que um período de 
                retenção mais longo seja exigido ou permitido por lei.
              </p>

              <div>
                <h3 className="font-semibold mb-2">Períodos de Retenção</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Dados de Navegação:</strong> Mantidos por até 12 meses para análise 
                    e melhoria do site
                  </li>
                  <li>
                    <strong>Cookies:</strong> Conforme configurações do navegador e tipo de cookie 
                    (essenciais, preferências, análise)
                  </li>
                  <li>
                    <strong>Informações de Contato:</strong> Mantidas enquanto houver necessidade 
                    de comunicação ou conforme exigido por lei
                  </li>
                  <li>
                    <strong>Consentimento:</strong> Registros de consentimento mantidos por 5 anos 
                    conforme LGPD
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Após o período de retenção, as informações são excluídas de forma segura ou 
                anonimizadas de modo que não possam mais ser associadas a você.
              </p>
            </CardContent>
          </Card>

          {/* Transferência Internacional */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                7. Transferência Internacional de Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Seus dados podem ser transferidos e mantidos em servidores localizados fora do 
                Brasil, especialmente devido ao uso de serviços de hospedagem em nuvem (Vercel).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quando transferimos dados internacionalmente, garantimos que:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Os provedores atendem a padrões adequados de proteção de dados</li>
                <li>Existem salvaguardas apropriadas conforme a LGPD</li>
                <li>Seus direitos continuam protegidos</li>
                <li>As transferências são necessárias para a operação do site</li>
              </ul>
            </CardContent>
          </Card>

          {/* Menores de Idade */}
          <Card>
            <CardHeader>
              <CardTitle>8. Menores de Idade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Este site não é direcionado a menores de 18 anos. Não coletamos intencionalmente 
                informações pessoais de menores sem o consentimento dos pais ou responsáveis legais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Se você é pai, mãe ou responsável legal e acredita que seu filho forneceu 
                informações pessoais sem seu consentimento, entre em contato conosco imediatamente. 
                Tomaremos medidas para remover essas informações de nossos registros.
              </p>
            </CardContent>
          </Card>

          {/* Alterações */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                9. Alterações nesta Política
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças 
                em nossas práticas, tecnologias, requisitos legais ou por outros motivos operacionais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quando fizermos alterações materiais, notificaremos você através de:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Aviso destacado no site</li>
                <li>Atualização da data "Última atualização" no topo desta página</li>
                <li>Email (se tivermos seu endereço de email)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Recomendamos que você revise esta página periodicamente para se manter informado 
                sobre como estamos protegendo suas informações.
              </p>
            </CardContent>
          </Card>

          {/* Gerenciar Consentimento */}
          <Card className="border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                10. Gerenciar Consentimento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {hasConsent ? (
                <>
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm text-green-900 dark:text-green-100">
                      <strong>Status:</strong> Você aceitou nossos termos e política de privacidade.
                    </p>
                    {consentDate && (
                      <p className="text-xs text-green-700 dark:text-green-300 mt-2">
                        Data de aceitação: {new Date(consentDate).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Você pode revogar seu consentimento a qualquer momento. Ao fazer isso, 
                    seus dados de preferência serão removidos e você será solicitado a aceitar 
                    os termos novamente na próxima visita.
                  </p>
                  <Button 
                    onClick={handleRevokeConsent}
                    variant="destructive"
                    className="w-full"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Revogar Consentimento
                  </Button>
                </>
              ) : (
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                  <p className="text-sm text-yellow-900 dark:text-yellow-100">
                    <strong>Status:</strong> Você ainda não aceitou nossos termos. 
                    Recarregue a página para ver o banner de consentimento.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                11. Entre em Contato
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas, comentários ou preocupações sobre esta Política de Privacidade 
                ou sobre como tratamos seus dados pessoais, entre em contato:
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p><strong>Controlador de Dados:</strong> Lucas Gomes Leria</p>
                <p><strong>Email:</strong> <a href="mailto:suporte-portfolio-nathalye-vitoria@googlegroups.com" className="text-primary hover:underline">suporte-portfolio-nathalye-vitoria@googlegroups.com</a></p>
                <p><strong>Telefone:</strong> <a href="tel:11945735280" className="text-primary hover:underline">(11) 94573-5280</a></p>
                <p><strong>Localização:</strong> São Paulo - Brasil</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Responderemos a todas as consultas relacionadas à privacidade dentro de 15 dias 
                úteis, conforme estabelecido pela LGPD.
              </p>
            </CardContent>
          </Card>

          {/* Autoridade de Proteção de Dados */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                12. Autoridade Nacional de Proteção de Dados (ANPD)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Você tem o direito de apresentar uma reclamação à Autoridade Nacional de Proteção 
                de Dados (ANPD) se acreditar que o tratamento de seus dados pessoais viola a LGPD.
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p><strong>ANPD - Autoridade Nacional de Proteção de Dados</strong></p>
                <p><strong>Website:</strong> <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.gov.br/anpd</a></p>
                <p><strong>Email:</strong> <a href="mailto:atendimento@anpd.gov.br" className="text-primary hover:underline">atendimento@anpd.gov.br</a></p>
              </div>
              <p className="text-sm text-muted-foreground">
                No entanto, encorajamos você a entrar em contato conosco primeiro para que possamos 
                resolver suas preocupações diretamente.
              </p>
            </CardContent>
          </Card>

          {/* Reconhecimento */}
          <Card className="border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle>13. Reconhecimento e Consentimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                AO USAR ESTE SITE, VOCÊ RECONHECE QUE LEU, COMPREENDEU E CONCORDOU COM ESTA 
                POLÍTICA DE PRIVACIDADE E COM O TRATAMENTO DE SEUS DADOS PESSOAIS CONFORME 
                DESCRITO AQUI.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Se você não concordar com esta Política, não use este site. Seu uso continuado 
                do site após a publicação de alterações a esta Política significa que você aceita 
                e concorda com as alterações.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
                <p className="text-sm text-purple-900 dark:text-purple-100">
                  <strong>Compromisso com sua Privacidade:</strong> Estamos comprometidos em 
                  proteger sua privacidade e garantir a segurança de suas informações pessoais. 
                  Tratamos seus dados com o máximo cuidado e respeito, sempre em conformidade 
                  com a LGPD e as melhores práticas de proteção de dados.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Link para Termos */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground">
              Leia também nossos{' '}
              <Link href="/terms" className="text-primary hover:underline font-semibold">
                Termos de Uso
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
