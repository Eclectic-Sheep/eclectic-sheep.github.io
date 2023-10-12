---
title: "Checks checks checks!"
author: John
excerpt: Does it work?
tags:
published: false
layout: post
image_header: cover
current: post
cover: assets/images/dreamer.png
navigation: True
class: post-template
subclass: 'post'
---

# Available Functionalities

```python

import torch
from torch import nn
from torch.nn import functional as F
from torch.utils.data import DataLoader
from torch.utils.data import random_split
from torchvision.datasets import MNIST
from torchvision import transforms
import pytorch_lightning as pl

class LitAutoEncoder(pl.LightningModule):
 def __init__(self):
  super().__init__()
  self.encoder = nn.Sequential(
      nn.Linear(28 * 28, 64),
      nn.ReLU(),
      nn.Linear(64, 3))
  self.decoder = nn.Sequential(
      nn.Linear(3, 64),
      nn.ReLU(),
      nn.Linear(64, 28 * 28))

 def forward(self, x):
  embedding = self.encoder(x)
  return embedding

 def configure_optimizers(self):
  optimizer = torch.optim.Adam(self.parameters(), lr=1e-3)
  return optimizer

 def training_step(self, train_batch, batch_idx):
  x, y = train_batch
  x = x.view(x.size(0), -1)
  z = self.encoder(x)    
  x_hat = self.decoder(z)
  loss = F.mse_loss(x_hat, x)
  self.log('train_loss', loss)
  return loss

 def validation_step(self, val_batch, batch_idx):
  x, y = val_batch
  x = x.view(x.size(0), -1)
  z = self.encoder(x)
  x_hat = self.decoder(z)
  loss = F.mse_loss(x_hat, x)
  self.log('val_loss', loss)

# data
dataset = MNIST('', train=True, download=True, transform=transforms.ToTensor())
mnist_train, mnist_val = random_split(dataset, [55000, 5000])

train_loader = DataLoader(mnist_train, batch_size=32)
val_loader = DataLoader(mnist_val, batch_size=32)

# model
model = LitAutoEncoder()

# training
trainer = pl.Trainer(gpus=4, num_nodes=8, precision=16, limit_train_batches=0.5)
trainer.fit(model, train_loader, val_loader)
    
```

# Latex Formulas

$$

L\left(s, a, \theta_k, \theta\right)=\min \left(\frac{\pi_\theta(a \mid s)}{\pi_{\theta_k}(a \mid s)} A^{\pi_{\theta_k}}(s, a), \quad \operatorname{clip}\left(\frac{\pi_\theta(a \mid s)}{\pi_{\theta_k}(a \mid s)}, 1-\epsilon, 1+\epsilon\right) A^{\pi_{\theta_k}}(s, a)\right),

$$

# Pseudocode

<pre id="quicksort" class="pseudocode" style="display:hidden;">
% This quicksort algorithm is extracted from Chapter 7, Introduction to Algorithms (3rd edition)
\begin{algorithm}
\caption{Quicksort}
\begin{algorithmic}
\PROCEDURE{Quicksort}{$A, p, r$}
    \IF{$p < r$}
        \STATE $q = $ \CALL{Partition}{$A, p, r$}
        \STATE \CALL{Quicksort}{$A, p, q - 1$}
        \STATE \CALL{Quicksort}{$A, q + 1, r$}
    \ENDIF
\ENDPROCEDURE
\PROCEDURE{Partition}{$A, p, r$}
    \STATE $x = A[r]$
    \STATE $i = p - 1$
    \FOR{$j = p$ \TO $r - 1$}
        \IF{$A[j] < x$}
            \STATE $i = i + 1$
            \STATE exchange
            $A[i]$ with $A[j]$
        \ENDIF
        \STATE exchange $A[i]$ with $A[r]$
    \ENDFOR
\ENDPROCEDURE
\end{algorithmic}
    \end{algorithm}
</pre>
