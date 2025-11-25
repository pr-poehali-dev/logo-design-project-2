import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="flex flex-col items-center space-y-8 text-center animate-fade-in">
            <div className="relative w-96 h-96 flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-8">
              <img 
                src="https://cdn.poehali.dev/projects/ad61bf79-d392-4314-b5ad-1ab9cf2e41de/files/1920d892-6e5f-498b-a084-104de7e23fb4.jpg"
                alt="Safe of Immortality Logo"
                className="w-full h-full object-contain hover-scale drop-shadow-2xl"
              />
            </div>
            
            <div className="space-y-3">
              <h1 className="text-6xl font-bold text-primary tracking-tight">
                Safe of Immortality
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Киберспортивная команда банковской безопасности
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
            <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover-scale">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 rounded-full bg-primary/10">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Безопасность</h3>
                <p className="text-muted-foreground">
                  Защищаем не только базы данных, но и вражеский Ancient
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover-scale">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 rounded-full bg-primary/10">
                  <Icon name="Trophy" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Победы</h3>
                <p className="text-muted-foreground">
                  Aegis — символ чемпионов и наша цель в каждой игре
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover-scale">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 rounded-full bg-primary/10">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Команда</h3>
                <p className="text-muted-foreground">
                  Профессионалы финтеха днём, легенды Dota 2 вечером
                </p>
              </div>
            </Card>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Icon name="Gamepad2" size={20} className="mr-2" />
              Наши матчи
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="Users" size={20} className="mr-2" />
              Состав команды
            </Button>
          </div>

          <div className="mt-16 w-full max-w-5xl">
            <Card className="p-8 bg-card border-primary/20">
              <h2 className="text-3xl font-bold text-center text-primary mb-8">Другие варианты названия</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-background rounded-lg border border-primary/30 hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-primary mb-2">SafeCore</h3>
                  <p className="text-muted-foreground text-sm">Ядро безопасности — текущий вариант</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-muted hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-foreground mb-2">CryptoGuard</h3>
                  <p className="text-muted-foreground text-sm">Защитники шифрования и Ancient</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-muted hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-foreground mb-2">VaultKeepers</h3>
                  <p className="text-muted-foreground text-sm">Хранители сейфов и трона</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-muted hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-foreground mb-2">SecureStack</h3>
                  <p className="text-muted-foreground text-sm">Безопасный стек технологий и скиллов</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-muted hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-foreground mb-2">AegisDefenders</h3>
                  <p className="text-muted-foreground text-sm">Защитники Эгиды — прямая отсылка к Dota</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-muted hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-foreground mb-2">FortressGG</h3>
                  <p className="text-muted-foreground text-sm">Неприступная крепость финтеха и киберспорта</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-muted hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-foreground mb-2">GoldShield</h3>
                  <p className="text-muted-foreground text-sm">Золотой щит — защита банка и команды</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-muted hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-foreground mb-2">ImmortalSec</h3>
                  <p className="text-muted-foreground text-sm">Бессмертная безопасность — отсылка к Immortal рангу</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-muted hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-foreground mb-2">RadiantGuard</h3>
                  <p className="text-muted-foreground text-sm">Стража света — защитники добра в Dota</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-muted hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-foreground mb-2">DivineLock</h3>
                  <p className="text-muted-foreground text-sm">Божественный замок — высший ранг и защита</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-muted hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-foreground mb-2">TreasureWatch</h3>
                  <p className="text-muted-foreground text-sm">Хранители сокровищ — банк и игровые трофеи</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-muted hover:border-primary transition-all cursor-pointer">
                  <h3 className="text-2xl font-bold text-foreground mb-2">ChampionShield</h3>
                  <p className="text-muted-foreground text-sm">Щит чемпионов — Aegis и защита данных</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;