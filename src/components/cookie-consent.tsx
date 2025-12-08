'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Shield, Cookie, FileText, X, ChevronDown, Scale, Eye, Lock, Database } from 'lucide-react'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verifica se o usuário já aceitou os termos
    const hasAccepted = localStorage.getItem('cookie-consent-accepted')
    
    if (!hasAccepted) {
      // Pequeno delay para animação suave
      setTimeout(() => {
        setShowConsent(true)
        setTimeout(() => setIsVisible(true), 100)
      }, 1000)
    }
  }, [])

  const handleAccept = () => {
    // Salva a aceitação no localStorage
    localStorage.setItem('cookie-consent-accepted', 'true')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    
    // Animação de saída
    setIsVisible(false)
    setTimeout(() => setShowConsent(false), 300)
  }

  const handleDecline = () => {
    // Redireciona para fora do site se o usuário recusar
    window.location.href = 'https://www.google.com'
  }

  if (!showConsent) return null

  return (
    <>
      {/* Overlay escuro */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ pointerEvents: showConsent ? 'auto' : 'none' }}
      />

      {/* Modal de consentimento */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none overflow-y-auto">
        <Card 
          className={`w-full max-w-4xl my-8 shadow-2xl border-2 pointer-events-auto transition-all duration-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <CardHeader className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full">
                  <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Bem-vindo ao Portfólio de Nathalye vitoria!</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Sua privacidade é importante para nós
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Antes de continuar, precisamos que você leia e aceite nossos Termos de Uso e Política de Privacidade abaixo.
            </p>

            {/* Accordion com Termos e Política */}
            <Accordion type="single" collapsible className="w-full border rounded-lg">
              <AccordionItem value="terms" className="border-b-0">
                <AccordionTrigger className="px-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Termos de Uso</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">1. Aceitação dos Termos</h4>
                        <p className="text-muted-foreground">
                          Ao acessar e navegar neste site, você aceita e concorda em estar vinculado aos 
                          termos e condições aqui estabelecidos. Estes Termos se aplicam a todos os visitantes, 
                          usuários e outras pessoas que acessam ou usam o site.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">2. Uso Permitido</h4>
                        <p className="text-muted-foreground mb-2">Este site é um portfólio profissional destinado a:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                          <li>Apresentar projetos, certificações e habilidades técnicas</li>
                          <li>Fornecer informações de contato profissional</li>
                          <li>Compartilhar conhecimento e experiências na área de Mecatrônica</li>
                          <li>Facilitar networking profissional e oportunidades de carreira</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">3. Propriedade Intelectual</h4>
                        <p className="text-muted-foreground">
                          Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, imagens, vídeos, 
                          código-fonte e design, é de propriedade de Nathalye Vitoria Felix e está protegido 
                          por leis de direitos autorais e propriedade intelectual.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">4. Uso Proibido</h4>
                        <p className="text-muted-foreground mb-2">Você concorda em NÃO usar o site para:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                          <li>Violar qualquer lei ou regulamento</li>
                          <li>Transmitir material difamatório, obsceno ou ilegal</li>
                          <li>Fazer-se passar por outra pessoa ou entidade</li>
                          <li>Tentar obter acesso não autorizado ao site</li>
                          <li>Usar bots ou ferramentas automatizadas sem permissão</li>
                          <li>Utilizar qualquer conteúdo para alimentar modelos de IA, Machine Learning, Deep Learning, etc...</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">5. Isenção de Garantias</h4>
                        <p className="text-muted-foreground">
                          Este site é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo. 
                          Não garantimos que o site estará sempre disponível ou livre de erros.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">6. Lei Aplicável</h4>
                        <p className="text-muted-foreground">
                          Estes Termos serão regidos pelas leis da República Federativa do Brasil. 
                          Qualquer disputa será submetida à jurisdição dos tribunais de Guarulhos, São Paulo.
                        </p>
                      </div>

                      <div className="pt-2 border-t">
                        <p className="text-xs text-muted-foreground">
                          <strong>Última atualização:</strong> 7 de dezembro de 2025
                        </p>
                      </div>
                    </div>
                  </ScrollArea>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy" className="border-b-0">
                <AccordionTrigger className="px-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Política de Privacidade</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Database className="h-4 w-4" />
                          1. Informações que Coletamos
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          <strong>Informações de Navegação:</strong> Coletamos automaticamente informações sobre seu 
                          dispositivo, navegador, endereço IP, fuso horário e cookies.
                        </p>
                        <p className="text-muted-foreground mb-2">
                          <strong>Informações de Contato:</strong> Se você entrar em contato através dos links fornecidos, 
                          as informações compartilhadas serão usadas apenas para responder à sua solicitação.
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Cookies:</strong> Utilizamos cookies para preferências de tema, configurações de idioma 
                          e análise de tráfego.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          2. Como Usamos Suas Informações
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                          <li>Melhorar e otimizar o funcionamento do site</li>
                          <li>Analisar como os visitantes navegam e interagem</li>
                          <li>Responder a mensagens e solicitações de contato</li>
                          <li>Manter as preferências do usuário (tema, idioma)</li>
                          <li>Detectar e prevenir fraudes ou abusos</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Lock className="h-4 w-4" />
                          3. Compartilhamento de Informações
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          <strong>Não vendemos</strong> suas informações pessoais. Compartilhamos apenas com:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                          <li>Provedores de hospedagem (Vercel) para operar o site</li>
                          <li>Autoridades quando exigido por lei</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">4. Seus Direitos (LGPD)</h4>
                        <p className="text-muted-foreground mb-2">Você tem direito a:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                          <li>Confirmar a existência de tratamento de dados</li>
                          <li>Acessar seus dados pessoais</li>
                          <li>Corrigir dados incompletos ou inexatos</li>
                          <li>Solicitar anonimização ou eliminação de dados</li>
                          <li>Revogar o consentimento a qualquer momento</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">5. Segurança dos Dados</h4>
                        <p className="text-muted-foreground">
                          Implementamos medidas de segurança técnicas e organizacionais apropriadas, incluindo 
                          conexão HTTPS, hospedagem segura e armazenamento mínimo de dados pessoais.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">6. Contato</h4>
                        <p className="text-muted-foreground">
                          Para exercer seus direitos ou tirar dúvidas: <br />
                          <strong>Email:</strong> lucasleria17@gmail.com<br />
                          <strong>Telefone:</strong> (11) 94573-5280
                        </p>
                      </div>

                      <div className="pt-2 border-t">
                        <p className="text-xs text-muted-foreground">
                          <strong>Última atualização:</strong> 7 de dezembro de 2025
                        </p>
                      </div>
                    </div>
                  </ScrollArea>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                Resumo - O que coletamos:
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Informações de navegação para melhorar sua experiência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Preferências de tema (modo claro/escuro)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Cookies essenciais para o funcionamento do site</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Importante:</strong> Este é um portfólio profissional e não vendemos 
                ou compartilhamos suas informações com terceiros. Seus dados são usados apenas 
                para melhorar sua experiência de navegação.
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              Ao clicar em "Aceitar e Continuar", você concorda com nossos termos e políticas acima. 
              Você pode revisar ou revogar seu consentimento a qualquer momento através das 
              páginas de Termos de Uso e Política de Privacidade.
            </p>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleAccept}
              className="w-full sm:flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
              size="lg"
            >
              <Shield className="mr-2 h-5 w-5" />
              Aceitar e Continuar
            </Button>
            <Button 
              onClick={handleDecline}
              variant="outline"
              className="w-full sm:w-auto"
              size="lg"
            >
              <X className="mr-2 h-4 w-4" />
              Recusar
            </Button>
          </CardFooter>

          <div className="px-6 pb-4">
            <p className="text-xs text-center text-muted-foreground">
              Ao recusar, você será redirecionado para fora do site
            </p>
          </div>
        </Card>
      </div>
    </>
  )
}
